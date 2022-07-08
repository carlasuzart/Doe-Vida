import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  .patientsList {
    min-height: 600px;
    width: 94%;
    min-width: 257.55px;

    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    align-items: center;

    background: #591c21;
    border-radius: 8px;

    max-width: 625px;

    .dateDiv {
      display: flex;
      justify-content: space-between;

      width: 100%;
      padding: 1rem 2rem;

      color: white;

      h1 {
        font-size: 1.5rem;
        font-weight: 600;
      }

      span {
        display: flex;
        align-items: center;
        font-size: 24px;
        cursor: pointer;

        transition: 0.4s;
        &:hover {
          color: #d92526;
        }
      }
    }
    .patientCard {
      width: 90%;
      height: 45px;
      padding: 0 5px;

      display: flex;
      flex-direction: column;
      color: white;
      border: 1px solid white;

      p:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }

      cursor: pointer;

      @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        p:nth-child(2) {
          display: block;
          justify-content: flex-end;
          width: fit-content;
        }
      }
    }
  }
`;
