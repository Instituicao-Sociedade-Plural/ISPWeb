import styled from "styled-components";

export const StyledButton = styled.button`
  height: 29px;
  width: 149px;
  border: none;
  color: #ffffff;
  font-family: Poppins;
  font-weight: 500;
  cursor: pointer;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  background: linear-gradient(180deg, #fe904c 0%, #ff7017 100%);
  box-shadow: 0px 2.04911px 2.04911px rgba(0, 0, 0, 0.15);

  @media (max-width: 767px) {
    font-size: 15px;
    height: 22px;
    width: 94px;
    line-height: 23px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    height: 17px;
    width: 73px;
    font-size: 12px;
    line-height: 18px;
  }
`;
