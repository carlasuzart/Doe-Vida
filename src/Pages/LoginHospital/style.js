import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .logoHospital {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 277.2px;

    h1 {
      font-size: 40px;
      color: #591c21;
      font-weight: 400;
    }

    span {
      color: #034140;
      font-size: 23px;
    }
  }
`;

export const LoginForm = styled.form`
  width: 85vw;
  min-width: 270px;
  max-width: 531px;
  height: 439px;

  padding-top: 3rem;
  padding-bottom: 3rem;

  background: #034140;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 400;
    color: white;
    font-size: 35px;
  }

  .inputSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 85%;
    max-width: 375px;

    .input {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      label {
        color: white;
        margin-left: 5px;
      }

      input {
        height: 33px;
        outline: none;
        padding-left: 12px;
      }
    }
  }

  .buttonSection {
    width: 100%;

    button {
      width: 33%;
      min-width: 133.23px;
      height: 33px;
      background: #591c21;

      color: white;
      font-size: 1.1rem;

      transition: 0.4s;
      &:hover {
        background: #d92526;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    span {
      cursor: pointer;
      font-size: 10px;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
