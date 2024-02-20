import styled from "styled-components";

export const Grid = styled.div`
  column-count: 3;

  @media (max-width: 1250px) {
    column-count: 2;
  }

  @media (max-width: 1000px) {
    column-count: 1;
  }
`;
