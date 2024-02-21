import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    color: black;
}



body{
    height: 100vh;
    max-width: 100vw; 
    background-color: #f2f2f2;
}

`;
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
`;
