import ispLogo from "../../assets/logo-isp.svg";
import { Button } from "../Button/Button";
import DropdownMenu from "../Button/ButtonMobile/ButtonMobile";
import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <figure>
        <img src={ispLogo} alt="logo isp" />
      </figure>
      <nav>
        <a href="#home">HOME</a>
        <a href="#whoWeAre">QUEM SOMOS</a>
        <a href="#project">PROJETOS</a>
        <a href="#gallery">GALERIA</a>
        <a href="#contact">CONTATO</a>
      </nav>
      <DropdownMenu />
      <Button>DOE AGORA </Button>
    </HeaderContainer>
  );
};
