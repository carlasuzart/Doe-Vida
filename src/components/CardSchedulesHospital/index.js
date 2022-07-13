import styled from "styled-components";

export const LI = styled.li`
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
`;
