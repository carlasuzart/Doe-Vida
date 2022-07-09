import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    height: 700px;
  }

  .validacao {
    display: flex;
    flex-direction: row;
    margin: 0px;
    align-items: center;
  }

  h1 {
    width: 344px;
    height: 41px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 33.9261px;
    line-height: 46px;
    color: #8d1f28;
    margin-top: 10px;
    text-align: center;
  }

  label {
    left: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 21.3882px;
    line-height: 29px;
    color: #000000;
  }

  input {
    width: 280px;
    height: 40px;
    background: #fefffb;
    border: 1px solid #591c21;
    border-radius: 10px;
    padding: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    margin-bottom: 20px;
  }

  p {
    color: red;
    width: 250px;
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
    margin-left: 60px;
    transition: 0.3s;
    &:hover {
      background: #046967;
    }
  }

  .btn {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
  }

  span {
    margin-left: 150px;
    font-family: "Nunito";
    font-style: normal;
    font-size: 16px;
    text-align: center;
    color: #7d7d7d;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    form {
      height: 800px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
    }

    h1 {
      width: 92px;
      height: 41px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 33.9261px;
      line-height: 46px;
      color: #8d1f28;
    }

    .validacao {
      display: flex;
      flex-direction: row;
      margin: 0px;
      align-items: center;
    }

    p {
      color: red;
      margin-left: 20px;
      width: 200px;
    }

    input {
      width: 400px;
      height: 40px;
      background: #fefffb;
      border: 1px solid #591c21;
      border-radius: 10px;
      padding: 20px;
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
      margin-top: 10px;
    }

    span {
      width: 400px;
      font-family: "Nunito";
      font-style: normal;
      font-size: 16px;
      text-align: center;
      color: #7d7d7d;
      cursor: pointer;
      margin-left: 40px;
      margin-bottom: 20px;
      text-decoration: none;
    }
  }
`;
