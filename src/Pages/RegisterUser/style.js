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
    width: 264px;
    background: #591c21;
    border-radius: 6px;
  }

  h1 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 41.6928px;
    text-align: center;
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  label {
    left: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-size: 18px;
    color: #ffffff;
  }

  input {
    width: 280px;
    height: 40px;
    background: #fefffb;
    border: 1px solid #591c21;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    width: 222px;
    height: 39px;
    left: 21px;
    top: 324px;
    margin-left: 20px;
    background: #034140;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 21.9941px;
    line-height: 30px;
    color: #ffffff;
    border-radius: 7px;
    margin-top: 40px;
    margin-bottom: 10px;
    cursor: pointer;

    transition: 0.3s;
    &:hover {
      background: #046967;
    }
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;
    color: #ffffff;
    text-align: center;
    margin-left: 100px;

    &:hover {
      text-decoration: underline;
    }
  }

  .labelArea {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
  }

  .Error {
    margin-top: 0;
    color: red;
    margin-left: 20px;
  }

  @media (min-width: 480px) {
    form {
      width: 464px;
      top: 71px;
      background: #591c21;
      border-radius: 6px;
    }

    p {
      margin-top: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 60px;
    }

    input {
      width: 347px;
      height: 40px;
      left: 92px;
      top: 171px;
      background: #fefffb;
    }

    button {
      margin-left: 60px;
      width: 347px;
    }

    span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 10px;
      color: #ffffff;
      margin-left: 210px;
      cursor: pointer;
    }
  }
`;
