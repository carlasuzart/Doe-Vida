import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 3rem;
  background: ${(props) => (props.type === "hospital" ? "#034140" : "#591C21")};

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 77px;
    height: 28px;
    border-radius: 7px;
    background: ${(props) =>
      props.type === "hospital" ? "#591c21" : "#034140"};

    font-size: 1rem;
    color: white;

    transition: 0.4s;
    &:hover {
      background: ${(props) =>
        props.type === "hospital" ? "#d92526" : "#046967"};
    }
  }

  h1 {
    color: white;
    font-weight: 800;
    font-size: 24px;

    span {
      color: #d92526;
    }
  }
`;
