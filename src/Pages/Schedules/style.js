import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #f5f5f5;

  .E {
    width: 21px;
    height: 20px;
    background: #034140;
    border-radius: 5px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 9.74466px;
  }

  .buttonEContainer {
    display: flex;
    justify-content: flex-end;
    width: 100vw;
  }
  .topPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nameUser {
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
  }

  .doar {
    width: 224px;
    height: 29px;
    font-size: 19.1504px;
    color: #ffffff;
    background: #034140;
    border-radius: 8px;
    margin-top: 19px;
    margin-bottom: 35px;
  }

  hr {
    background-color: #8d1f28;
    width: 100vw;
    height: 5px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  }

  h2 {
    color: #000000;
    font-size: 19px;
    margin-left: 15px;
    margin-top: 25px;
  }

  h3 {
    color: #7d7d7d;
    font-size: 21px;
    margin-top: 135px;
  }

  .endereço {
    color: #7d7d7d;
    font-size: 13px;
    margin-bottom: 52px;
  }

  @media (min-width: 764px) {
    .topPage {
      flex-direction: row;
      justify-content: space-between;
    }
    .buttonEContainer {
      width: 40px;
      height: 90px;
      align-items: flex-end;
    }
    .Infos {
      display: flex;
    }

    .E {
      margin-bottom: 10px;
    }

    h2 {
        font-size: 30.733px;
    }
    h3 {
        font-size: 33.4883px;
        margin-top: 212px;
    }
    .doar{
        margin-right: 65px;
    }
    main{
        
    }
  }
`;
