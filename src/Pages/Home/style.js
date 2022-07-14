import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 80px;
    height: 70px;
  }

  h1 {
    font-family: "Nunito";
    margin-top: 5px;
    font-size: 35px;
    color: #000000;
  }

  h2 {
    font-family: "Nunito";
    margin-top: 5px;
    color: #d92526;
    font-size: 35px;
  }
  .LogoAndName {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-right: 35px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-left: 20px;
    align-items: center;
    text-align: center;
  }

  .red {
    background-color: #d92526;
    color: #fefffb;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;

    transition: 0.3s;
    &:hover {
      background: red;
    }
  }

  .green {
    background-color: #034140;
    color: #fefffb;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;

    transition: 0.4s;
    &:hover {
      background: #046967;
    }
  }

  @media (min-width: 758px) {
    h1 {
      font-size: 105.329px;
    }
    h2{
      font-size: 105.329px;
    }

    img{
      width: 190px;
    height: 180px;
    }
    .LogoAndName {
      margin-right: 110px;
    }

   .green{
    width: 350px;
height: 71px;
   }

   .red{
    width: 350px;
height: 71px;
   }

  }
`;
