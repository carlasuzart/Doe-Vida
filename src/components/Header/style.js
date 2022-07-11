import styled from "styled-components";

export const HeaderStyle = styled.header`
  box-shadow: 3px 2px 2px 1px rgba(141, 31, 40);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Nunito", sans-serif;
  padding-top: 20px;
  padding-bottom: 10px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
  }
  img {
    width: 80px;
    height: 70px;
  }

  h1 {
    margin-left: 10px;
    font-weight: 800;
    font-size: 40px;
    color: #034140;
  }
  h2 {
    margin-left: 10px;
    color: #d92526;
    font-weight: 700;
    font-size: 40px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-left: 30vw;
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

  @media (min-width: 768px) {
    .header {
      margin-left: 10vw;
    }
    .buttons {
      margin-left: 22vw;
    }
    .green {
      margin-right: 10vw;
    }
  }
`;
