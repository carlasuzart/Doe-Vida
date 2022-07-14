import styled from "styled-components";

export const Container = styled.div`
  min-height: 40px;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 12px;
  }

  div {
    width: 200px;
  }

  button {
    background-color: #591c21;
    width: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;
