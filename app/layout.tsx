import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FEF1F7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yogher.in"),
  title: {
    default: "YogHer — Live online yoga for Indian women",
    template: "%s | YogHer",
  },
  description:
    "Personal live classes for weight loss, PCOS, body toning, flexibility and stress relief. Monday to Saturday live sessions on Google Meet that fit around your family schedule.",
  keywords: [
    "yoga for women",
    "online live yoga India",
    "weight loss yoga",
    "PCOS yoga classes",
    "body toning yoga",
    "face yoga India",
    "women only yoga",
  ],
  authors: [{ name: "YogHer Wellness" }],
  creator: "YogHer",
  publisher: "YogHer",
  icons: {
    icon: "/brand/yogher-logo.png",
    shortcut: "/brand/yogher-logo.png",
    apple: "/brand/yogher-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yogher.in",
    siteName: "YogHer",
    title: "YogHer — Live online yoga for Indian women",
    description:
      "Live daily yoga classes for weight loss, PCOS, body toning, and flexibility with certified women coaches on Google Meet.",
    images: [
      {
        url: "/brand/yogher-logo.png",
        width: 256,
        height: 256,
        alt: "YogHer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YogHer — Live online yoga for Indian women",
    description:
      "Live daily yoga classes for weight loss, PCOS, body toning, and flexibility with certified women coaches on Google Meet.",
    images: ["/brand/yogher-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/brand/yogher-logo.png" sizes="any" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-softpink text-bordeaux">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
