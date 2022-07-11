import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  h1 {
    font-family: "Nunito";
    color: #d92526;
    margin-bottom: 28px;
    margin-top: 65px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 85%;
    margin-bottom: 15px;
    font-family: "Roboto";
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-top: 15px;
    font-family: "Nunito";
    color: #d92526;
    font-size: 21px;
    display: flex;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3,
  h4 {
    width: 80%;
    font-size: 18px;
    font-family: "Nunito";
    color: #d92526;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  p {
    font-family: "Roboto";
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .link {
    margin-top: 10px;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  .aceptButton {
    font-family: "Nunito";
    color: #ffffff;
    background: #034140;
    width: 196px;
    height: 34px;
    font-size: 14px;
    border-radius: 8px;
    margin-top: 29px;

    transition: 0.4s;
    &:hover {
      background: #046967;
    }
  }

  .returnButton {
    color: #7d7d7d;
    margin-top: 4px;
    background-color: transparent;
    margin-bottom: 35px;
  }

  .aviso {
    color: #d92526;
    font-family: "Nunito";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    width: 87%;
  }

  @media (min-width: 340px) {
    h2,
    h1 {
      width: 100%;
    }
  }

  @media (min-width: 348px) {
    h4 {
      margin-left: 35px;
    }
  }
  @media (min-width: 900px) {
    .aviso {
      width: 100%;
    }
    ul {
      width: 80%;
    }
    li {
      width: 40%;
    }
    p {
      width: 57%;
    }

    .aceptButton {
      width: 225.17px;
      height: 39.06px;
      font-size: 16.0833px
    }
    .returnButton {
        font-size: 16.0833px;
    }
  }
`;
