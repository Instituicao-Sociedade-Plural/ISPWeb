import { Form } from "../Form/Form";
import {
  FooterContainer,
  FormContainer,
  MapContainer,
  Maps,
  MapText,
  IconContainer,
  SocialIcons,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <h2> Contato</h2>
      <div className="flex">
        <FormContainer>
          <p>Fale com a gente!</p>
          <Form />
        </FormContainer>
        <MapContainer>
          <Maps>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49531.6866312252!2d-43.28651584923242!3d-22.673741015383502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9972edfbe838f5%3A0x672bb060c280a52a!2sDuque%20de%20Caxias%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1670934180387!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Maps>
          <MapText>
            <p>Rua Carioca, 123</p>
            <p>Duque de Caxias / RJ</p>
            <p>90000-000</p>
          </MapText>
          <IconContainer>
            <SocialIcons href="mailto:" target="_blank">
              <i class="fas fa-envelope"></i>
            </SocialIcons>
            <SocialIcons
              href="https://www.facebook.com/instituicaosociedadeplural/"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </SocialIcons>
            <SocialIcons
              href="https://mobile.twitter.com/SociedadePlural"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </SocialIcons>
            <SocialIcons
              href="https://www.instagram.com/sociedadeplural/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/company/institui%C3%A7%C3%A3o-sociedade-plural/mycompany/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </SocialIcons>
            <SocialIcons href="#" target="_blank">
              <i class="fab fa-whatsapp"></i>
            </SocialIcons>
          </IconContainer>
        </MapContainer>
      </div>
      <p> ISP-SJB Todos direitos reservados CNPJ: XXXXXXX-XX</p>
    </FooterContainer>
  );
};
