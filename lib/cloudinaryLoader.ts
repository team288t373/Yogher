export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (src.includes("res.cloudinary.com/dmtggqp0f/image/upload/")) {
    const uploadPrefix = "res.cloudinary.com/dmtggqp0f/image/upload/";
    const q = quality ? `q_${quality}` : "q_auto";
    // Cap width to maximum 1100px to respect 2x display max and avoid Cloudinary transformation limits
    const cappedWidth = Math.min(width, 1100);
    const params = `f_auto,${q},w_${cappedWidth},c_limit`;

    // Avoid double parameters if already present
    if (src.includes("f_auto")) {
      return src;
    }
    return src.replace(uploadPrefix, `${uploadPrefix}${params}/`);
  }
  return src;
}
