import { Blurhash } from "react-blurhash";
import { Photo } from "./styles";
import { useState, useEffect } from "react";

export const ImageComponent = ({ src, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={300}
          height={300}
          resolutionX={100}
          resolutionY={100}
          punch={1}
        />
      )}
      {imageLoaded && <Photo src={src} />}
    </>
  );
};
