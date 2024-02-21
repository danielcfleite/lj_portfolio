import { useState } from "react";
import { PhotosGrid } from "../Components/PhotoGrid";

export const Retratos = () => {
  const [category, setCategory] = useState("genteESom");
  const handleSelection = () => {
    if (category === "moda") {
      setCategory("genteESom");
    } else {
      setCategory("moda");
    }
  };
  return (
    <>
      <button onClick={() => handleSelection()}>Toggle</button>
      <PhotosGrid page={"retratos"} category={category} />
    </>
  );
};
