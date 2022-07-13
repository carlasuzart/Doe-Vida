import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const PatientsList = styled.div`
  min-height: 600px;
  width: 95%;
  max-width: 500px;
  background: #591c21;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  color: white;
  gap: 3rem;

  .dateDiv {
    h1 {
      font-size: 22px;
    }

    span {
      font-size: 25px;
      cursor: pointer;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .patientDiv {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
