import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterForm = styled.section`
  height: 630px;
  width: 90vw;
  max-width: 531px;
  min-width: 250px;
  padding: 1rem 0;
  background: #034140;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: white;
    font-weight: 400;
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

      border-radius: 5px;

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
