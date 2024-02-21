import { Blurhash } from "react-blurhash";
import { Photo } from "./styles";
import { useState, useEffect } from "react";

export const ImageComponent = ({ src, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [blurHashError, setBlurHashError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setBlurHashError(true); // Set blurHashError state if image loading fails
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && !blurHashError && (
        <Blurhash
          hash={hash}
          width={300}
          height={300}
          resolutionX={100}
          resolutionY={100}
          punch={1}
        />
      )}
      {imageLoaded && !blurHashError && <Photo src={src} />}
      {blurHashError && <Photo src={src} />}{" "}
      {/* Fallback to regular photo if BlurHash fails */}
    </>
  );
};
