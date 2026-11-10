"use client";

import { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackInitials?: string;
  fallbackClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackInitials,
  fallbackClassName = "w-full h-full min-h-[140px] bg-cotton text-bordeaux font-extrabold flex items-center justify-center text-2xl select-none",
  className,
  loader,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check on mount if image completed with 0 naturalWidth (failed before hydration)
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete && imgRef.current.naturalWidth === 0) {
        setError(true);
      }
    }
  }, []);

  if (error || !src) {
    return (
      <div
        className={fallbackClassName}
        role="img"
        aria-label={alt}
      >
        <span>{fallbackInitials || "YH"}</span>
      </div>
    );
  }

  const isCloudinary = typeof src === "string" && src.includes("cloudinary.com");

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loader={loader || (isCloudinary ? cloudinaryLoader : undefined)}
      onError={() => setError(true)}
      onLoad={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.naturalWidth === 0) {
          setError(true);
        }
      }}
      {...props}
    />
  );
}
