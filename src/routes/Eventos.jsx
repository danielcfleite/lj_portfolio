import { useState } from "react";
import { PhotosGrid } from "../Components/PhotoGrid";

export const Eventos = () => {
  const [category, setCategory] = useState("festasEComemoracoes");
  const [loading, setLoading] = useState(false);

  const handleSelection = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
    if (category === "familiaEInfantil") {
      setCategory("festasEComemoracoes");
    } else {
      setCategory("familiaEInfantil");
    }
  };
  return (
    <>
      <button onClick={() => handleSelection()}>Toggle</button>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <PhotosGrid page={"eventos"} category={category} />
      )}
    </>
  );
};
