import { Carousel } from "./Carousel";
import { useContext } from "react";
import { CarouselContext } from "../../providers/Carousel";

import "./styles.css";

export const CarouselContainer = () => {
  const { data } = useContext(CarouselContext);

  console.log(data);
  const captionStyle = {
    fontSize: "15px",
    top: "20px",
  };

  const CarouselData = {
    data: data,
    time: 2000,
    width: "2440px",

    height: "500px",
    captionStyle: captionStyle,
    radius: "10px",
    captionPosition: "bottom",
    automatic: true,
    dots: true,
    pauseIconColor: "white",
    pauseIconSize: "40px",
    slideBackgroundColor: "darkgrey",
    slideImageFit: "cover",
    showNavBtn: true,
    style: {
      textAlign: "top",
      maxWidth: "100vw",
    },
  };

  return (
    <div style={{ textAlign: "center" }} id="home">
      <Carousel CarouselData={CarouselData} />
    </div>
  );
};
