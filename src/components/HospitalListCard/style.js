import styled from "styled-components";

export const Container = styled.div`
  min-height: 110px;
  width: 90%;
  max-width: 600px;
  background: #034140;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 1rem;

  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background: #046967;
  }

  h2,
  p {
    color: white;
  }

  h2 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    font-family: "Nunito";
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;
