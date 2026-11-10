const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const outDir = path.join(__dirname, '..', 'out');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(outDir)) {
  console.error('Error: out directory does not exist!');
  process.exit(1);
}

// 1. Copy .htaccess and .nojekyll
['.htaccess', '.nojekyll'].forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(outDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[postbuild] Copied ${file} to out/`);
  }
});

// 2. Locate generated CSS file
const cssDir = path.join(outDir, '_next', 'static', 'css');
let cssFileName = null;
let rawCssContent = '';

if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir).filter((f) => f.endsWith('.css'));
  if (cssFiles.length > 0) {
    cssFileName = cssFiles[0];
    rawCssContent = fs.readFileSync(path.join(cssDir, cssFileName), 'utf8');
    console.log(`[postbuild] Found CSS file: ${cssFileName} (${rawCssContent.length} bytes)`);

    // Create non-underscore copies: out/assets/css/style.css and out/css/style.css
    const assetsCssDir = path.join(outDir, 'assets', 'css');
    fs.mkdirSync(assetsCssDir, { recursive: true });
    fs.writeFileSync(path.join(assetsCssDir, 'style.css'), rawCssContent, 'utf8');

    const regularCssDir = path.join(outDir, 'css');
    fs.mkdirSync(regularCssDir, { recursive: true });
    fs.writeFileSync(path.join(regularCssDir, 'style.css'), rawCssContent, 'utf8');
    console.log('[postbuild] Created fallback copies at assets/css/style.css and css/style.css');
  }
}

// 3. Process each HTML file: inline CSS and make paths relative
function processHtmlFile(filePath) {
  const relPath = path.relative(outDir, filePath).replace(/\\/g, '/');
  const depth = relPath.split('/').length - 1;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  console.log(`[postbuild] Processing HTML: ${relPath} (depth: ${depth}, prefix: ${prefix})`);

  let html = fs.readFileSync(filePath, 'utf8');

  // Convert root-absolute asset paths to relative
  html = html.replace(/(href|src|content)=["']\/_next\//g, `$1="${prefix}_next/`);
  html = html.replace(/(href|src|content)=["']\/brand\//g, `$1="${prefix}brand/`);
  html = html.replace(/(href|src|content)=["']\/downloads\//g, `$1="${prefix}downloads/`);
  html = html.replace(/(href|src|content)=["']\/images\//g, `$1="${prefix}images/`);

  // Replace JSON chunks inside self.__next_f
  html = html.replace(/\\\/_next\\\//g, `${prefix.replace(/\//g, '\\/')}_next\\/`);
  html = html.replace(/\\\/brand\\\//g, `${prefix.replace(/\//g, '\\/')}_brand\\/`);
  html = html.replace(/\\\/downloads\\\//g, `${prefix.replace(/\//g, '\\/')}_downloads\\/`);
  html = html.replace(/\\\/images\\\//g, `${prefix.replace(/\//g, '\\/')}_images\\/`);

  // Relative page navigation links
  if (depth === 0) {
    html = html.replace(/href=["']\/glowher\/?["']/g, 'href="./glowher/"');
    html = html.replace(/href=["']\/privacy\/?["']/g, 'href="./privacy/"');
    html = html.replace(/href=["']\/terms\/?["']/g, 'href="./terms/"');
    html = html.replace(/href=["']\/refund-policy\/?["']/g, 'href="./refund-policy/"');
  } else {
    html = html.replace(/href=["']\/(index\.html)?["']/g, 'href="../"');
    html = html.replace(/href=["']\/glowher\/?["']/g, 'href="../glowher/"');
    html = html.replace(/href=["']\/privacy\/?["']/g, 'href="../privacy/"');
    html = html.replace(/href=["']\/terms\/?["']/g, 'href="../terms/"');
    html = html.replace(/href=["']\/refund-policy\/?["']/g, 'href="../refund-policy/"');
  }

  // INLINE CSS IN HEAD: This is the ultimate fix that prevents CSS from ever failing
  if (rawCssContent) {
    // Rewrite font URLs in CSS relative to the HTML file's location
    const adjustedCss = rawCssContent.replace(/url\(\/_next\//g, `url(${prefix}_next/`);

    // Remove existing inlined style tag if present to avoid duplication
    html = html.replace(/<style id="yogher-inlined-tailwind"[\s\S]*?<\/style>/gi, '');

    const styleTag = `\n<style id="yogher-inlined-tailwind">\n${adjustedCss}\n</style>\n<link rel="stylesheet" href="${prefix}assets/css/style.css" />\n`;

    // Inject before </head>
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${styleTag}</head>`);
    } else {
      html = `${styleTag}${html}`;
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Don't recurse into _next for HTML searches (HTML is only in routes)
      if (file !== '_next') {
        walkDir(fullPath);
      }
    } else if (file.endsWith('.html')) {
      processHtmlFile(fullPath);
    }
  }
}

walkDir(outDir);
console.log('[postbuild] Finished inlining CSS and updating relative links in all HTML files.');

// 4. Create website-live-out.zip containing EVERYTHING in out/
const zipPath = path.join(__dirname, '..', 'website-live-out.zip');
if (fs.existsSync(zipPath)) {
  try {
    fs.unlinkSync(zipPath);
    console.log('[postbuild] Removed old website-live-out.zip');
  } catch (e) {
    console.warn('[postbuild] Could not remove old zip directly:', e.message);
  }
}

try {
  if (process.platform === 'win32') {
    const psCmd = `powershell -NoProfile -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipPath}' -Force"`;
    cp.execSync(psCmd, { stdio: 'inherit' });
    console.log('[postbuild] Successfully created website-live-out.zip with Compress-Archive');
  } else {
    try {
      cp.execSync(`cd "${outDir}" && zip -r "${zipPath}" . -q`, { stdio: 'inherit' });
      console.log('[postbuild] Successfully created website-live-out.zip with zip');
    } catch {
      console.log('[postbuild] Zip utility not available in this environment (skipped zip archive).');
    }
  }
} catch (err) {
  console.warn('[postbuild] Notice creating zip:', err.message);
}
