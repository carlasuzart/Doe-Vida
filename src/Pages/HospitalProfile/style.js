import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;

  .hospitalInfo {
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #8d1f28;

    p {
      font-size: 12px;
      color: #7d7d7d;
      text-align: center;
    }

    button {
      color: white;
      background: #034140;
      width: 17px;
      position: absolute;
      top: 150px;
      left: 10px;
      border-radius: 5px;

      transition: 0.4s;
      &:hover {
        background: #046967;
      }
    }
  }
`;

export const Schedules = styled.div`
  display: flex;
  flex-direction: column;

  .scheduleTitle {
    display: flex;
    padding: 0 1.3rem;
    margin-top: 10px;
    justify-content: space-between;

    h2 {
      font-size: 18px;
    }

    button {
      color: white;
      background: #034140;
      width: 17px;
      height: 18px;
      border-radius: 5px;

      transition: 0.4s;
      &:hover {
        background: #046967;
      }
    }
  }

  .scheduleCards {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    margin-top: 1.6rem;
  }

  .cardItem {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 1.3rem;
    width: 90%;
    max-width: 500px;
    height: 66px;

    font-size: 14px;
    color: white;
    background: #591c21;

    cursor: pointer;

    transition: 0.4s;
    &:hover {
      background: #8d1f28;
    }
  }
`;
