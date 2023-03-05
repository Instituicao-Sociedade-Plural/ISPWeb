import styled from "styled-components";

export const StyledButton = styled.button`
  display: none;

  @media (max-width: 720px) {
    display: block;
    background: none;
    border: none;

    .botaomobile {
      font-size: 40px;
      background-color: transparent;
      border: none;
      color: #00cfe6;
    }
    ul {
      position: absolute;
      z-index: 1;
      width: 50%;
      height: 300px;
    }
    li {
      height: 40px;
      position: relative;
      background-color: #fe6c05;
      margin: 7px;
    }
    a {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 39px;
      text-align: center;

      color: #ffffff;
    }
  }
`;
