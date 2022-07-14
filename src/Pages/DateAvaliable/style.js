import styled from "styled-components";

export const Container = styled.div`
  height: 92vh;
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin-top: 40px;
    width: 320px;
    height: 592px;
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
    font-family: "Nunito";
    font-style: normal;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }

  .form__datepicker {
    width: 150px;
    margin-left: 36%;
    margin-top: 10%;
    color: #ffffff;

    label {
      font-size: 20px;
    }

    input {
      margin-top: 10px;
      font-size: 16px;
      border-radius: 4px;
    }

    #button {
      margin-top: 15px;
      width: 80px;
      height: 30px;
      background-color: #591c21;
      color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      margin-left: 10px;
      border-radius: 4px;
      line-height: 30px;
    }
  }

  @media (min-width: 480px) {
    form {
      width: 625px;
      height: 594px;
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
      font-family: "Nunito";
      font-style: normal;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
