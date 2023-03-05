import { useState } from "react";
import { ProjectContainer, CarouselItem } from "./styles.js";
import { Button } from "../../components/Button/Button";
import imagem1 from "../../assets/projetosimagem.png";
import imagem2 from "../../assets/projetosimagem2.png";

export const ProjectsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: imagem1,
      title: "Construindo o futuro",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.  ",
    },
    {
      src: imagem2,
      title: "Conecta geração jovem",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.",
    },
  ];

  const handlePreviousClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <ProjectContainer id="project">
      <h2> Projetos </h2>
      <div className="carousel">
        <button className="next-btn" onClick={handleNextClick}>
          ᐸ
        </button>
        <CarouselItem>
          <img src={images[activeIndex].src} alt={images[activeIndex].title} />
          <h3>{images[activeIndex].title}</h3>
          <p>{images[activeIndex].text}</p>
          <Button>DOE AGORA</Button>
        </CarouselItem>
        <CarouselItem>
          <img
            src={images[(activeIndex + 1) % images.length].src}
            alt={images[(activeIndex + 1) % images.length].title}
          />
          <h3>{images[(activeIndex + 1) % images.length].title}</h3>
          <p>{images[(activeIndex + 1) % images.length].text}</p>
          <Button>DOE AGORA</Button>
        </CarouselItem>
        <button className="next-btn" onClick={handlePreviousClick}>
          ᐳ
        </button>
      </div>
    </ProjectContainer>
  );
};
