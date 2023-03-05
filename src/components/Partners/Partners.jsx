import { React, useState, useEffect, useRef } from "react";
import { PartnersContainer, Item, Inner, CarouselPartners } from "./styles.js";
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import partner3 from "./assets/partner3.png";
import partner4 from "./assets/partner4.png";
import partner5 from "./assets/partner5.png";
import partner6 from "./assets/partner6.png";
import partner7 from "./assets/partner7.png";

const images = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];

export const Partners = () => {
  const carousel = useRef();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <PartnersContainer>
      <h2> Parceiros </h2>
      <CarouselPartners ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <Inner
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <Item key={image}>
              <img src={image} alt="Parceiros da ISP" />
            </Item>
          ))}
        </Inner>
      </CarouselPartners>
    </PartnersContainer>
  );
};
