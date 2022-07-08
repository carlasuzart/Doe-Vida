import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  margin-top: 20px;
  width: 270px;
  height: 95px;
  background: #034140;
  border-radius: 5px;
  color: #ffffff;
  padding-left: 10px;
  padding-top: 6px;

  h4 {
    font-size: 12px;
    font-family: "Inter";

    margin-bottom: 9px;
  }

  .data {
    font-size: 13px;
    margin-bottom: 9px;
  }

  .endereçoHospital {
    font-size: 13px;
    font-family: "Inter";
    color: #ffffff;
  }

  @media (min-width: 564px) {
    width: 499px;
    height: 81px;


    h4{
        font-size: 14px; 
    }
    .endereçoHospital{
        font-size: 14px;
    }
    .data{
        font-size: 14px;
    }
  }
`;
