import { Blurhash } from "react-blurhash";
import { Photo } from "./styles";
import { useState, useEffect } from "react";

export const ImageComponent = ({ src }) => {
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
          hash="LHLN.4~q~qM{~q%MD%WB?bIUM{Rj"
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && <Photo src={src} />}
    </>
  );
};
