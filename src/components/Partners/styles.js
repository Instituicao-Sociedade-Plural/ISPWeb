import styled from "styled-components";
import { motion } from "framer-motion";

export const PartnersContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 415px;
    margin: 20px auto 0px auto;
  }

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
`;

export const CarouselPartners = styled(motion.div)`
  margin: 40px auto;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;

  @media (max-width: 768px) {
    cursor: grab;
    margin-top: 60px;
    max-width: 680px;
  }

  @media (max-width: 992px) {
    max-width: 800px;
  }

  @media (max-width: 425px) {
    max-width: 340px;
  }
`;

export const Inner = styled(motion.div)`
  display: flex;

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Item = styled(motion.div)`
  min-height: 130px;
  min-width: 130px;
  padding: 10px;

  @media (min-width: 1200px) {
    min-width: 160px;
  }

  img {
    width: 100%;
    height: 90%;
    pointer-events: none;
  }
`;
