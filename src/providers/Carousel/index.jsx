import { createContext } from "react";
import foto1 from "../../assets/carousel1.png";
import foto2 from "../../assets/img2.jpg";

export const CarouselContext = createContext({});

export const CarouselProvider = ({ children }) => {
  const data = [
    {
      image: foto1,
      caption: `<div>
            <h3 class="titulo__banner">PROJETO CONSTRUINDO O FUTURO</h3>
                    <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
          </p>
          </div>`,
    },
    {
      image: foto2,
      caption: `<div>
          <h3 class="titulo__banner">PROGRAMA CONECTA GERAÇÃO JOVEM</h3>
          <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
    
          </p>
          </div>`,
    },
  ];

  const CarouselData = {
    data: data,
    time: 2000,
    width: "100vw",
    height: "535px",
    captionStyle: {
      fontSize: "15px",
      top: "20px",
    },
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
    <CarouselContext.Provider value={{ data, CarouselData }}>
      {children}
    </CarouselContext.Provider>
  );
};
