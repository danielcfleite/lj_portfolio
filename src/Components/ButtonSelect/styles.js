import styled from "styled-components";

export const ButtonTag = styled.button`
  color: #f2f2f2;
  cursor: pointer;
  border: none;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: bold;
  background-color: #4d6f59;
  border-radius: 15px;
  padding: 0.2rem 1rem;
  opacity: ${(props) => (props.selected ? "1" : "0.7")};
`;

export const SelectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
