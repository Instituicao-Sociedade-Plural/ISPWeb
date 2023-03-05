import { useState } from "react";
import { StyledButton } from "./styles";

function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledButton>
      <button className="botaomobile" onClick={() => setShowMenu(!showMenu)}>
        ≡
      </button>
      {showMenu ? (
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#whoWeAre">QUEM SOMOS</a>
          </li>
          <li>
            <a href="#project">PROJETOS</a>
          </li>
          <li>
            <a href="#gallery">GALERIA</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </ul>
      ) : null}
    </StyledButton>
  );
}

export default DropdownMenu;
