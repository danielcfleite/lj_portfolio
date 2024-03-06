import styled from "styled-components";

export const ButtonTag = styled.button`
  color: #4d6f59;
  cursor: pointer;
  border: none;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: bold;
  background-color: transparent;
  border-radius: 15px;
  padding: 0.2rem 1rem;
  opacity: ${(props) => (props.selected ? "1" : "0.7")};

  &:hover {
    opacity: ${(props) => (props.selected ? "1" : "0.9")};
    filter: ${(props) => (props.selected ? "" : "brightness(1.3)")};
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const SelectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
