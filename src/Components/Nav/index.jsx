import logo from "../../assets/logo.png";
import {
  LinksContainer,
  Logo,
  NavContainer,
  NavLink,
  SocialLink,
} from "./styles";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Nav = () => (
  <NavContainer>
    <Logo src={logo} />
    <LinksContainer>
      <NavLink href="#">Overview</NavLink>
      <NavLink href="#">Retratos</NavLink>
      <NavLink href="#">Eventos</NavLink>
      <NavLink href="#">Corporativo</NavLink>
      <NavLink href="#">Sobre</NavLink>
    </LinksContainer>
    <LinksContainer>
      <SocialLink href="#">
        <FaInstagram size={22} />
      </SocialLink>
      <SocialLink href="#">
        <FaWhatsapp size={22} />
      </SocialLink>
    </LinksContainer>
  </NavContainer>
);
