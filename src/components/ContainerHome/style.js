import styled from "styled-components";

export const Main = styled.div`
  img {
    margin-top: 10vh;
    margin-left: 5vw;
    width: 90vw;
    height: 60vh;
  }

  @media (min-width: 800px) {
    img {
      margin-top: 30px;
      height: 80vh;
      width: 80vw;
      margin-left: 10vw;
    }
  }
`;
