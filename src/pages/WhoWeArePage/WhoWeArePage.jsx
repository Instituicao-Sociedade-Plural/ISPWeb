import React from "react";
import {
  MainContainer,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./styles";

import image from "../../assets/image6.png";
import { Button } from "../../components/Button/Button";

export const WhoWeArePage = () => {
  return (
    <MainContainer id="whoWeAre">
      <FirstSection>
        <section className="hero__background">
          <div className="hero">
            <section className="section__empresa">
              <section className="section__quem">
                <h1 id="projeto__nome" className="titulo__empresa">
                  Quem somos?
                </h1>
                <p className="paragrafo paragrafo__empresa">
                  Somos uma organização não-governamental com sede em Duque de
                  Caxias-RJ. Atualmente a instituição é formada por uma equipe
                  de mais de 50 voluntários, das áreas de RH, Pedagogia,
                  Publicidade e Marketing e Tecnologia. Temos o programa Trilha
                  de Carreira, que visa o desenvolvimento pessoal e profissional
                  através do nosso ambiente de voluntariado, funcionando como um
                  laboratório de experiências profissionais.
                </p>
              </section>
              <section className="empresa__info">
                <div className="circle__info">
                  <p className="circle__paragrafo--wrap">
                    10 anos de <br />
                    história
                  </p>
                </div>

                <div className="circle__info">
                  <p className="circle__paragrafo">
                    XXX atendimentos por semana
                  </p>
                </div>

                <div className="circle__info">
                  <p className="circle__paragrafo--wrap">
                    150+ famílias alcançadas
                  </p>
                </div>
              </section>
            </section>
            <iframe
              src="https://www.youtube.com/embed/wTfmgB3mi-4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </FirstSection>

      <SecondSection>
        <section className="section__caracteristicas">
          <section className="section__caracteristicas--conteiner">
            <section className="section__caracteristica">
              <h1 className="caracteristica__titulo">Missão</h1>
              <p className="caracteristica__paragrafo">
                Transformar a realidade das comunidades por meio de ações
                culturais, esportivas e de geração de renda, transmitindo
                valores coletivos e individuais aos atendidos, bem como
                conscientizá-los sobre os próprios direitos e deveres na
                sociedade.
              </p>
            </section>

            <section className="section__caracteristica">
              <h1 className="caracteristica__titulo">Visão</h1>
              <p className="caracteristica__paragrafo">
                Ser reconhecida, no âmbito nacional e internacional, como
                organização de referência na cocriação, promoção e implementação
                de projetos e estratégias de transformação social.
              </p>
            </section>

            <section className="section__caracteristica section__caracteristica--valor">
              <h1 className="caracteristica__titulo">Valores</h1>
              <p className="caracteristica__paragrafo caracteristica__paragrafo--valores">
                <div className="paragrafo--valores">
                  <span className="valores__titulo">Coragem:</span>
                  acreditamos e impulsionamos o indivíduo a sonhar, traçar metas
                  e alcançar objetivos.
                </div>

                <div className="paragrafo--valores">
                  <span className="valores__titulo">
                    Respeito à Diversidade:
                  </span>
                  valorizamos cada indivíduo e reconhecemos a pluralidade. Todos
                  somos únicos, diferentes e singulares.
                </div>
                <div className="paragrafo--valores">
                  <span className="valores__titulo">
                    Transformação econômica e ambiental:
                  </span>
                  trabalhamos por uma sociedade mais humana e justa, e por um
                  mundo melhor para todos, até às próximas gerações.
                </div>
              </p>
            </section>
          </section>
        </section>
      </SecondSection>

      <ThirdSection>
        <div className="conteiner">
          <img src={image} className="img"></img>
          <div className="background">
            <div>
              <section>
                <div className="card">
                  <p className="card--paragrafo">JUNTE-SE A NÓS</p>
                </div>
                <p className="paragrafo">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta quo porro asperiores voluptatum a modi doloribus
                  necessitatibus eligendi laboriosam, deserunt incidunt! Ducimus
                  dolor molestiae amet dolores odio, aperiam hic voluptatum!
                </p>
                <Button> Doe agora </Button>
              </section>
            </div>
          </div>
        </div>
      </ThirdSection>
    </MainContainer>
  );
};
