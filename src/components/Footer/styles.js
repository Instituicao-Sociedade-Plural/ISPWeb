import styled from "styled-components";

export const FooterContainer = styled.div`
  background-image: linear-gradient(
    180deg,
    #63b2bb 34.11%,
    rgba(224, 125, 37, 0.58) 100%
  );
  height: 570px;

  @media (max-width: 767px) {
    min-height: 680px;

    width: 100%;
  }

  h2 {
    height: 63px;
    width: 100%;
    margin: auto;
    font-family: Poppins;
    font-size: 42px;
    font-weight: 800;
    text-align: center;
    color: #ffffff;
    padding: 10px;

    @media (max-width: 425px) {
      font-size: 28px;
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    height: 80%;
    padding: 10px;

    @media (max-width: 425px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  p {
    width: 35%;
    font-size: 18px;
    margin: 20px auto;

    @media (max-width: 768px) {
      font-size: 10.5px;
    }

    @media (max-width: 425px) {
      font-size: 8px;
      width: 50%;
      margin: 60px auto 0 auto;
    }
  }

  @media only screen and (min-width: 768px) {
    min-height: 340px;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  min-width: 450px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    margin: 30px 0 30px 0;
  }

  p {
    height: 28px;
    width: 189px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    margin: 10px auto;
    color: #1e1e1e;

    @media (max-width: 425px) {
      font-size: 16px;
      text-align: center;
      margin: 40px auto 0 auto;
    }
  }
`;

export const MapContainer = styled.div`
  height: 70%;
  min-width: 450px;
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Maps = styled.div`
  margin: auto;
  width: 390px;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    width: 280px;
    height: 100px;
  }

  iframe {
    width: 390px;
    border: 0;

    @media (max-width: 425px) {
      width: 280px;
    }
  }
`;

export const MapText = styled.div`
  width: 390px;
  margin-top: 15px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 425px) {
    width: 280px;
    height: 100px;
    margin: 30px 0 10px 85px;
  }

  p {
    font-family: Roboto;
    width: 50%;
    margin: 0;
    font-size: 18px;
    color: #1e1e1e;

    @media (max-width: 425px) {
      font-size: 12px;
    }
  }
`;

/* Ícones das Redes Sociais */
export const IconContainer = styled.div`
  width: 390px;
  margin: 30px auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 425px) {
    margin: -50px auto 0 auto;
    gap: 14px;
  }
`;

export const SocialIcons = styled.a`
  color: #f5f5f5;
  font-size: 48px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;
