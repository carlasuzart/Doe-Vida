import styled from "styled-components";

export const Main = styled.div`
  img {
    margin-top: 50px;
    width: 100vw;
    height: 50vh;
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
