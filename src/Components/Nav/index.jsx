import logo from "../../assets/logo.png";
import {
  HambuguerMenuWrapper,
  LinksContainer,
  Logo,
  MobileMenu,
  NavContainer,
  NavLink,
  SocialLink,
} from "./styles";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen(!isOpen);
    // Toggle body overflow style to prevent scrolling when menu is open
    document.documentElement.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <HambuguerMenuWrapper>
        <Hamburger
          toggled={isOpen}
          toggle={handleToggleMenu}
          direction="right"
          onClick={console.log("Hamburger clicked. isOpen:", isOpen)}
          color="#4d6f59"
        />
      </HambuguerMenuWrapper>
      <MobileMenu isOpen={isOpen}>
        <Logo src={logo} />
        <Link to="/" onClick={() => setOpen(!open)}>
          Overview
        </Link>
        <Link to="/retratos" onClick={() => setOpen(!open)}>
          Retratos
        </Link>
        <Link to="/eventos" onClick={() => setOpen(!open)}>
          Eventos
        </Link>
        <Link to="/corporativo" onClick={() => setOpen(!open)}>
          Corporativo
        </Link>
      </MobileMenu>
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
          {/* <NavLink href="#">Sobre</NavLink> */}
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
    </>
  );
};
