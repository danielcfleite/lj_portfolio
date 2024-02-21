import { useState } from "react";
import { PhotosGrid } from "../Components/PhotoGrid";

export const Retratos = () => {
  const [category, setCategory] = useState("genteESom");
  const [loading, setLoading] = useState(false);

  const handleSelection = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
    if (category === "moda") {
      setCategory("genteESom");
    } else {
      setCategory("moda");
    }
  };
  return (
    <>
      <button onClick={() => handleSelection()}>Toggle</button>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <PhotosGrid page={"retratos"} category={category} />
      )}
    </>
  );
};
