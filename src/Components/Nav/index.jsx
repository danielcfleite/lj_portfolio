import logo from "../../assets/logo.png";
import {
  LinksContainer,
  Logo,
  NavContainer,
  NavLink,
  SocialLink,
} from "./styles";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

export const Nav = () => (
  <NavContainer>
    <Logo src={logo} />
    <LinksContainer>
      <Link to="/">
        <NavLink>Overview</NavLink>
      </Link>
      <Link to="/retratos">
        <NavLink href="#">Retratos</NavLink>
      </Link>
      <Link to="/eventos">
        <NavLink href="#">Eventos</NavLink>
      </Link>
      <Link to="/corporativo">
        <NavLink href="#">Corporativo</NavLink>
      </Link>
      <NavLink href="#">Sobre</NavLink>
    </LinksContainer>
    <LinksContainer>
      <SocialLink href="https://www.instagram.com/lussiao/" target="_blank">
        <PiInstagramLogoFill size={23} style={{ fill: "#4d6f59" }} />
      </SocialLink>
      <SocialLink href="https://wa.me/5561994057723" target="_blank">
        <IoLogoWhatsapp size={23} style={{ fill: "#4d6f59" }} />
      </SocialLink>
    </LinksContainer>
  </NavContainer>
);
