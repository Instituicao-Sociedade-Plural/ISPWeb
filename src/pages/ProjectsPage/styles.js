import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 5px auto;
  text-align: center;

  h2 {
    height: 69px;
    width: 210px;
    font-family: Poppins;
    font-size: 46px;
    font-weight: 900;
    line-height: 69px;
    text-align: left;
    color: #fe6c05;
    margin: 20px auto;
  }
  .carousel {
    height: 95%;
    width: 90%;
    margin: auto;
    display: flex;
    padding: 20px;
  }

  .next-btn {
    border: none;

    background-color: transparent;
    font-weight: 800;
    color: #fe6c05;
    font-size: larger;
    font-weight: 800;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 95vw;
    height: 90%;

    .carousel {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
    }
    button {
      display: none;
    }
  }
`;

export const CarouselItem = styled.div`
  width: 100%;
  width: 520px;
  height: 628px;
  border-radius: 3px;
  border: 1px solid #fe6c05;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 5px;

  img {
    object-fit: cover;
    max-width: 512px;
    max-height: 280px;
    height: 280px;
  }

  h3 {
    height: 38px;
    width: 430px;
    color: #fe6c05;
    font-family: Roboto;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
  }

  p {
    height: 80px;
    width: 430px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 317px;
    margin: 15px auto;
    height: 390px;
    border-radius: 2px;

    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 23px;
      width: 200px;

      text-align: left;
    }

    img {
      width: 95%;
      height: 171px;
    }

    p {
      height: 49px;
      width: 263px;
      font-family: Poppins;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
      text-align: center;
    }
  }
`;
