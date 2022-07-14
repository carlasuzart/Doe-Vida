import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 270px;
  height: 150px;
  background: #034140;
  border-radius: 5px;
  color: #ffffff;
  padding-left: 10px;
  padding-top: 6px;

  cursor: pointer;

  transition: 0.4s;
  &:hover {
    background: #046967;
  }

  h4 {
    font-size: 16px;
    font-family: "Inter";
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .endereçoHospital {
    font-size: 13px;
    font-family: "Inter";
    color: #ffffff;
  }

  @media (min-width: 564px) {
    width: 499px;
    height: 130px;

    .infoDiv {
      margin-left: 15%;
    }

    h4 {
      font-size: 14px;
    }
    .endereçoHospital {
      font-size: 14px;
    }
  }
`;
