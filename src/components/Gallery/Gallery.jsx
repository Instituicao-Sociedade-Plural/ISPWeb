import { GalleryContainer } from "./styles";
import React, { useState, useEffect } from "react";
import imagem1 from "../../assets/img-ong1.png";
import imagem2 from "../../assets/img-ong2.png";
import imagem3 from "../../assets/img-ong3.png";
import imagem4 from "../../assets/img-ong4.png";
import imagem5 from "../../assets/img-ong5.png";
import imagem6 from "../../assets/img-ong6.png";

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

  useEffect(() => {
    let intervalId = null;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex + 3 >= images.length) {
            return 0;
          }
          return prevIndex + 3;
        });
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [autoPlay, index]);

  return (
    <GalleryContainer>
      <h2>Galeria</h2>
      <div className="container">
        <div className="slider">
          {images.slice(index, index + 3).map((image, i) => (
            <div key={i} className="slide">
              <img src={image} alt={`Imagem ${index + i + 1}`} />
            </div>
          ))}
        </div>
        <div className="controles">
          <div className="controls_left">
            <button
              onClick={() =>
                setIndex((prevIndex) => {
                  if (prevIndex === 0) {
                    return images.length - 3;
                  }
                  return prevIndex - 3;
                })
              }
            >
              ᐸ
            </button>
          </div>
          <button
            className="controls_right"
            onClick={() =>
              setIndex((prevIndex) => {
                if (prevIndex + 3 >= images.length) {
                  return 0;
                }
                return prevIndex + 3;
              })
            }
          >
            ᐳ
          </button>
        </div>

        <div className="indicators">
          {images.map((image, i) => (
            <span
              key={i}
              className={i >= index && i < index + 3 ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </GalleryContainer>
  );
};
