import logo from "../../assets/logo.png";
import {
  HambuguerMenuWrapper,
  LinksContainer,
  Logo,
  MobileMenu,
  NavContainer,
  SecondaryLinksContainer,
  SocialLink,
} from "./styles";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen(!isOpen);
  };
  const [portraitOptions, setPortraitOptions] = useState(false);
  const [eventsOptions, setEventsOptions] = useState(false);
  const handlePortraitClick = () => {
    setEventsOptions(false);
    setPortraitOptions(true);
    if (portraitOptions === true) {
      setPortraitOptions(false);
    }
  };
  const handleEventsClick = () => {
    setEventsOptions(true);
    setPortraitOptions(false);
    if (eventsOptions === true) {
      setEventsOptions(false);
    }
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
        <Link onClick={handlePortraitClick}>
          Retratos <MdKeyboardArrowDown />
        </Link>
        {portraitOptions ? (
          <>
            <SecondaryLinksContainer>
              <Link to="/moda" onClick={() => setOpen(!open)}>
                Moda
              </Link>
              <Link to="/gente-e-som" onClick={() => setOpen(!open)}>
                Gente e som
              </Link>
            </SecondaryLinksContainer>
          </>
        ) : (
          <></>
        )}

        <Link onClick={handleEventsClick}>
          Eventos <MdKeyboardArrowDown />
        </Link>
        {eventsOptions ? (
          <>
            <SecondaryLinksContainer>
              <Link to="/festas-e-comemoracoes" onClick={() => setOpen(!open)}>
                Festas e comemorações
              </Link>
              <Link to="/familia-e-infantil" onClick={() => setOpen(!open)}>
                Família e infantil
              </Link>
            </SecondaryLinksContainer>
          </>
        ) : (
          <></>
        )}
        <Link to="/corporativo" onClick={() => setOpen(!open)}>
          Corporativo
        </Link>
      </MobileMenu>
      <NavContainer>
        <Logo src={logo} />
        <LinksContainer>
          <Link to="/">Overview</Link>
          <Link to="/retratos">Retratos</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/corporativo">Corporativo</Link>
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
