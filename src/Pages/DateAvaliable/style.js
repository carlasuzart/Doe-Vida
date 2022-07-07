import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    width: 320px;
    height: 592px;
    left: 0px;
    top: 78px;
    background: #034140;
  }

  h1 {
    width: 300px;
    height: 32px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    margin-top: 20px;
    line-height: 32px;
    color: #ffffff;
    text-align: center;
  }

  p {
    width: 300px;
    height: 10px;
    font-family: "Inter";
    font-style: normal;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }

  @media (min-width: 480px) {
    form {
      width: 625px;
      height: 594px;
      left: 488px;
      top: 83px;
      background: #034140;

    }

    h1 {
    width: 600px;
    height: 32px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    margin-top: 20px;
    line-height: 32px;
    color: #ffffff;
    text-align: center;
  }

  p {
    width: 600px;
    height: 10px;
    font-family: "Inter";
    font-style: normal;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }
  }
`;
