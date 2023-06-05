"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageholderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageHolder = ({ src, alt, width, height }: ImageholderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div
          className={`bg-gray-500 animate-pulse absolute top-0 left-0 w-full h-full`}
        ></div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`absolute top-0 left-0 w-full h-full ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-1000"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export default ImageHolder;
