import { useState, useEffect } from "react";

export const OptimizedImage = ({ src, alt, className, width, height }) => {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
  }, [src]);

  return (
    <>
      {loading && (
        <div
          className={`animate-pulse bg-gray-200 ${className}`}
          style={{ width, height }}
        />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${loading ? "hidden" : "block"}`}
          loading="lazy"
          width={width}
          height={height}
        />
      )}
    </>
  );
};
