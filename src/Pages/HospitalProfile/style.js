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
      width: 21px;
      height: 20px;
      position: absolute;
      top: 150px;
      left: 10px;
      border-radius: 5px;
      font-size: 20px;

      transition: 0.4s;
      &:hover {
        background: #046967;
      }
    }
  }
  h3 {
    color: #7d7d7d;
    font-size: 21px;
    margin-top: 135px;
  }
  .noAgendation {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 764px) {
    h3 {
      font-size: 33.4883px;
      margin-top: 212px;
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
      width: 21px;
      height: 20px;
      border-radius: 5px;
      font-size: 20px;

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
`;
