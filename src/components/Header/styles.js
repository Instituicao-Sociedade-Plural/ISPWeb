import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 90vw;
  height: 104px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px auto;
  z-index: 999;
  position: fixed;
  top: -10px;

  .botaoMobile {
    display: none;
  }

  figure {
    display: flex;
    justify-content: center;
  }

  nav {
    width: 50%;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      height: 25px;
      border-right: 2px solid #d9d9d9;
      padding: 5px;
      padding-right: 15px;
      color: #525252;
      font-size: 20px;
      white-space: nowrap;
      font-weight: 400;
    }
  }

  .botaoMobile {
    display: none;
  }

  @media (max-width: 900px) {
    width: 100vw;
    figure img {
      height: 77px;
      width: 98px;
    }

    nav a {
      font-size: 15px;
    }
  }

  @media (max-width: 720px) {
    nav {
      display: none;
    }
    .botaoMobile {
      display: block;
    }
  }
`;
