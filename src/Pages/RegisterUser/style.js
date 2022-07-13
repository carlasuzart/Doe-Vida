import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RegisterForm = styled.form`
  width: 90vw;
  max-width: 531px;
  min-width: 250px;
  padding: 1rem 0;
  background: #591c21;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: white;
    font-weight: 400;
    font-size: 35px;
    margin-bottom: 30px;
  }

  .labelArea {
    display: flex;
  }

  .Error {
    margin-left: 15px;
    color: red;
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
      background: #034140;
      margin-top: 20px;
      color: white;
      font-size: 1.1rem;

      border-radius: 5px;

      transition: 0.4s;
      &:hover {
        background: #046967;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    span {
      cursor: pointer;
      font-size: 16px;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
