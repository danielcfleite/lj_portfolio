import { useState } from "react";
import { PhotosGrid } from "../Components/PhotoGrid";

export const Eventos = () => {
  const [category, setCategory] = useState("festasEComemoracoes");
  const handleSelection = () => {
    if (category === "familiaEInfantil") {
      setCategory("festasEComemoracoes");
    } else {
      setCategory("familiaEInfantil");
    }
  };
  return (
    <>
      <button onClick={() => handleSelection()}>Toggle</button>
      <PhotosGrid page={"eventos"} category={category} />
    </>
  );
};
