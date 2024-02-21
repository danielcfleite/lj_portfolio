import { useState } from "react";
import { PhotosGrid } from "../Components/PhotoGrid";
import {
  ButtonTag,
  SelectionContainer,
} from "../Components/ButtonSelect/styles";

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
  const isPeopleandSoundSelected = category === "genteESom";

  return (
    <>
      <SelectionContainer>
        <ButtonTag
          onClick={handleSelection}
          selected={!isPeopleandSoundSelected}
        >
          Moda
        </ButtonTag>
        <ButtonTag
          onClick={handleSelection}
          selected={isPeopleandSoundSelected}
        >
          Gente e Som
        </ButtonTag>
      </SelectionContainer>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <PhotosGrid page={"retratos"} category={category} />
      )}
    </>
  );
};
