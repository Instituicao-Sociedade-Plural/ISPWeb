import styled from "styled-components";
import background from "../../assets/main-background.svg";

export const MainContainer = styled.div``;

export const FirstSection = styled.section`
  .section__empresa {
    background: linear-gradient(
      180deg,
      #63b2bb 34.11%,
      rgba(224, 125, 37, 0.58) 100%
    );
    height: 815px;
    margin-top: 50px;
  }

  iframe {
    display: block;
    margin: 15px auto 10px auto;
    height: 220px;
    width: 95%;
  }

  .section__quem {
    margin: auto auto 35px auto;
    padding-top: 20px;

    width: 80%;
  }

  .titulo__empresa {
    border-left: 3px solid #525252;

    color: #525252;
    font-family: "Roboto";
    font-size: 28px;
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;

    padding: 5px 0 0 10px;

    margin-bottom: 30px;

    height: 38px;
  }

  .paragrafo__empresa {
    position: relative;
    bottom: 15px;
    color: #ffffff;
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
  }

  .empresa__info {
    margin: auto;
    width: 80%;
  }

  .circle__info {
    background: #20b1c1;
    border-radius: 50%;

    color: #f5f5f5;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    margin-bottom: 25px;

    width: 121px;
    height: 121px;
  }

  .circle__paragrafo--wrap {
    word-wrap: wrap;
    width: 70%;
  }

  .cirlce--wrap {
    word-break: break-word;
  }

  @media (min-width: 640px) {
    .section__empresa {
      height: 580px;
    }

    iframe {
      margin: 20px auto 15px auto;

      height: 380px;
      width: 95%;
    }

    .section__quem {
      margin-bottom: 30px;
      padding-top: 50px;

      width: 70%;
    }

    .titulo__empresa {
      border-left: 4px solid #525252;

      font-size: 25px;

      height: 35px;
      margin-bottom: 40px;
    }

    .paragrafo__empresa {
      font-size: 18px;
      line-height: 27px;
    }

    .empresa__info {
      display: flex;
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .hero__background {
      background: linear-gradient(
        180deg,
        #63b2bb 34.11%,
        rgba(224, 125, 37, 0.58) 100%
      );
      height: 590px;
      width: 100%;
    }

    .hero {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;

      margin: auto;

      height: 610px;
      width: 75%;
    }

    .section__empresa {
      background: none;
      margin-top: 30px;
      height: 510px;
      width: 560px;
    }

    iframe {
      height: 510px;

      margin: 30px 0 0 0;
      width: 640px;
    }

    .section__quem {
      margin-bottom: 30px;
      padding-top: 0px;

      width: 90%;
    }

    .titulo__empresa {
      border-left: 5px solid #525252;
      font-size: 28px;

      margin-bottom: 25px;
      padding-top: 10px;

      height: 48px;
    }

    .paragrafo__empresa {
      font-size: 18px;
      text-align: center;
    }

    .empresa__info {
      display: flex;
      margin: auto;
      width: 95%;
    }

    .circle__info {
      font-size: 24px;
      height: 160px;
      width: 160px;
    }
  }
`;

export const SecondSection = styled.section`
  background: rgba(82, 82, 82, 0.9);
  height: 1012px;
  width: 100%;

  .section__caracteristicas {
    opacity: 90%;
    background-size: 100% 1012px;
    background: url(${background});
    background-position: center;
    height: 1012px;
    width: 100%;
  }

  .section__caracteristica {
    margin: auto;
    width: 290px;
    text-align: center;
  }

  .caracteristica__titulo {
    color: #fe6c05;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 800;
    line-height: 48px;
    text-align: center;

    display: block;

    padding: 40px 0 30px 0;
  }

  .caracteristica__paragrafo {
    color: rgba(245, 245, 245, 0.8);
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 800;
    line-height: 27px;
  }

  .paragrafo--valores {
    margin-bottom: 5px;
  }

  @media (min-width: 640px) {
    height: 950px;
    .section__caracteristicas {
      height: 950px;
    }

    .section__caracteristica {
      margin: auto;
      width: 550px;
    }

    .caracteristica__titulo {
      font-weight: 900px;
      padding: 40px 0 50px 0;
    }

    .caracteristica__paragrafo {
      font-size: 18px;
    }

    .valores__titulo {
      padding-right: 5px;
    }
  }

  @media (min-width: 1200px) {
    height: 230px;
    .section__caracteristicas {
      height: 230px;
    }

    .section__caracteristicas--conteiner {
      display: flex;
      justify-content: space-between;
      margin: auto;
      width: 90%;
    }

    .section__caracteristica {
      margin-top: 0;
      height: 230px;
    }

    .caracteristica__titulo {
      padding: 30px 0 40px 0;
    }

    .caracteristica__paragrafo {
      font-size: 16px;

      overflow: hidden;
      margin: auto;

      height: 55px;
      width: 370px;
    }

    .caracteristica__paragrafo:hover {
      position: absolute;
      z-index: 1;
      width: 600px;
      height: 110px;
      background: rgba(82, 82, 82, 0.9);
    }

    .caracteristica__paragrafo--valores:hover {
      display: flex;
      width: 1270px;
      justify-content: space-between;
      right: 0;
    }

    .valores__titulo {
      display: block;
      font-weight: 800;
    }
  }
`;

export const ThirdSection = styled.section`
  width: 100%;
  .img {
    filter: drop-shadow(0px 0.918332px 0.918332px rgba(0, 0, 0, 0.15));
    border-radius: 1.3775px;
    opacity: 40%;

    height: 182px;
    width: 100%;
  }
  .background {
    background: rgba(0, 207, 230, 0.5);
    border-radius: 1.3775px;
    box-shadow: 0px 0.918332px 0.918332px rgba(0, 0, 0, 0.15);

    height: 158px;
    width: 298px;
    position: relative;
    bottom: 200px;
    left: 30px;
    div {
      background: rgba(245, 245, 245, 0.5);
      box-shadow: 0px 0.918332px 0.918332px rgba(0, 0, 0, 0.15);
      border-radius: 1.3775px;
      text-align: center;

      height: 158px;
      width: 290px;
      section {
        .card {
          background: #00cfe6;
          box-shadow: 13.775px 5.96916px 32.6008px 6.42832px #ff7017;
          border-radius: 2.29583px;

          color: #ffffff;
          font-family: "Roboto";
          font-size: 12.8566px;
          font-style: normal;
          font-weight: 600;
          line-height: 15px;

          position: relative;
          top: 17px;
          right: 7px;

          height: 25.15px;
          width: 146.93px;
          .card--paragrafo {
            padding-top: 6px;
          }
        }

        .paragrafo {
          color: #000000;
          font-family: "Poppins";
          font-size: 8.26499px;
          font-style: normal;
          font-weight: 700;
          line-height: 12px;
          text-align: center;
          margin-top: 40px;
          margin-bottom: 25px;
        }

        Button {
          background: linear-gradient(180deg, #fe904c 0%, #ff7017 100%);
          border-radius: 5px;
          box-shadow: 0px 2.04911px 2.04911px rgba(0, 0, 0, 0.15);
          text-transform: uppercase;
          height: 35.859375px;
          width: 148.4571075439453px;
          &:hover {
            background: #00cfe6;
          }
        }
      }
    }
  }

  @media (min-width: 640px) {
    .img {
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15));
      border-radius: 3px;
      height: 343px;
    }
    .background {
      background: rgba(0, 207, 230, 0.5);
      border-radius: 3px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
      height: 343px;
      width: 650px;
      bottom: 390px;
      left: 70px;

      div {
        background: rgba(245, 245, 245, 0.5);
        box-shadow: 0px 0.918332px 0.918332px rgba(0, 0, 0, 0.15);
        border-radius: 3px 0px 0px 3px;

        height: 343px;
        width: 635px;

        section {
          .card {
            background: #00cfe6;
            box-shadow: 30px 13px 71px 14px #ff7017;
            border-radius: 5px;

            font-size: 28px;
            /* margin: 37px 16px 0 55px; */

            top: 37px;
            right: 16px;
            margin-bottom: 55px;

            height: 55px;
            width: 320px;
            .card--paragrafo {
              padding-top: 20px;
            }
          }

          .paragrafo {
            font-size: 18px;
            line-height: 27px;
            margin-top: 70px;
            margin-bottom: 40px;
          }

          Button {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .conteiner {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row-reverse;

      margin: auto;
      margin-top: 40px;

      width: 90%;
      .img {
        width: 450px;
        opacity: 100%;
      }
      .background {
        background: #00cfe6;
        position: static;
        div {
          background: #f5f5f5;
          border-radius: 3px 0px 0px 3px;

          section {
            .card {
              box-shadow: 20px 10px 55px #ff7017;
            }

            .paragrafo {
              color: #1e1e1e;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;
