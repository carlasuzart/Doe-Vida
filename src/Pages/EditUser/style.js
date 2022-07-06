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
    height: 500px;
  }

  h1 {
    width: 92px;
    height: 41px;
    left: 114px;
    top: 0px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 33.9261px;
    line-height: 46px;
    color: #8d1f28;
  }

  label {
    width: 58px;
    height: 29px;
    left: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 21.3882px;
    line-height: 29px;
    color: #000000;
  }

  input {
    width: 284px;
    height: 40px;
    background: #fefffb;
    border: 1px solid #591c21;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-bottom: 20px;
  }

  button {
    width: 284px;
    height: 45px;
    background: #034140;
    border-radius: 8px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    margin-left: 30px;
  }
  .btn {
      display: flex;
      flex-direction: column;
      margin-left: 0px;
    }

  span {
    margin-left: 140px;
    font-family: "Nunito";
    font-style: normal;
    font-size: 16px;
    text-align: center;
    color: #7d7d7d;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    h1 {
      width: 92px;
      height: 41px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 33.9261px;
      line-height: 46px;
      color: #8d1f28;
      margin-bottom:20px;
    }

    input {
      width: 400px;
      height: 40px;
      background: #fefffb;
      border: 1px solid #591c21;
      border-radius: 10px;
    }

    .btn {
      display: flex;
      flex-direction: column;
      margin-left: 0px;
    }

    button {
      width: 400px;
      height: 45px;
      background: #034140;
      border-radius: 8px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      margin-top: 30px;
    }

    span {
        width: 400px;
      font-family: "Nunito";
      font-style: normal;
      font-size: 16px;
      text-align: center;
      color: #7d7d7d;
      cursor: pointer;
      margin-left: 210px;
    }
  }
`;
