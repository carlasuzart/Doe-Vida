import styled from "styled-components";

export const Container = styled.div`
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
    width: 264px;
    left: 28px;
    top: 74px;
    background: #591c21;
    border-radius: 6px;
  }

  p {
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
    margin-top: 30px;
  }

  label {
    width: 200px;
    height: 22px;
    font-family: "Nunito";
    font-style: normal;
    font-size: 18px;
    color: #ffffff;
  }

  input {
    width: 222px;
    height: 29px;
    left: 21px;
    top: 160px;
    background: #fefffb;
    border-radius: 15px;
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
