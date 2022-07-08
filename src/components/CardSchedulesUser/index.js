import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  margin-top: 20px;
  width: 270px;
  height: 90px;
  background: #034140;
  border-radius: 5px;
  color: #ffffff;
  padding-left: 10px;
  padding-top: 6px;

  h4 {
    font-size: 12px;
    font-family: "Inter";
margin-top: 5px;
    margin-bottom: 20px;
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
   
  }
`;
