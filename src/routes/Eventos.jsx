import { useState } from "react";
import { PhotosGrid } from "../Components/PhotoGrid";
import {
  ButtonTag,
  SelectionContainer,
} from "../Components/ButtonSelect/styles";

export const Eventos = () => {
  const [category, setCategory] = useState("festasEComemoracoes");
  const [loading, setLoading] = useState(false);
  const isPartySelected = category === "festasEComemoracoes";

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
      <SelectionContainer>
        <ButtonTag onClick={handleSelection} selected={isPartySelected}>
          Festas e Comemorações
        </ButtonTag>
        <ButtonTag onClick={handleSelection} selected={!isPartySelected}>
          Família e Infantil
        </ButtonTag>
      </SelectionContainer>
      {/* <button onClick={() => handleSelection()}>Toggle</button> */}
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <PhotosGrid page={"eventos"} category={category} />
      )}
    </>
  );
};
