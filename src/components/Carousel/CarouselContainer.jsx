import { Carousel } from "./Carousel";
import { useContext } from "react";
import { CarouselContext } from "../../providers/Carousel";

export const CarouselContainer = () => {
  const { CarouselData } = useContext(CarouselContext);

  return (
    <div id="home">
      <Carousel CarouselData={CarouselData} />
    </div>
  );
};
