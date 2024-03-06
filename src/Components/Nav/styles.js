import styled from "styled-components";

export const NavContainer = styled.div`
  height: 13vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #a9a9a9;
  font-weight: medium;
  font-size: 0.8rem;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 50%;
  width: auto;

  @media (max-width: 1400px) {
    height: 20%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  justify-content: center;

  & > a {
    text-decoration: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: 0.2s ease-in-out;
    opacity: 0.6;
    padding-bottom: 0.2rem;

    &:hover {
      border-bottom: 2px solid #4d6f59;
      opacity: 1;
    }
  }
`;

export const SocialLink = styled.a`
  transition: 0.2s ease-in-out;
  opacity: 0.6;

  &:hover {
    transform: translateY(-2px);
    opacity: 1;
  }
`;

export const HambuguerMenuWrapper = styled.div`
  display: none;
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 1400px) {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
`;

export const MobileMenu = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  top: 0;
  right: 0;
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  & > a {
    align-items: center;
    text-decoration: none;
    display: block;
    color: #4d6f59;
    font-size: 1.5rem;
    font-weight: bold;

    text-align: center;
    width: 100%;
  }
`;

export const SecondaryLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  > a {
    width: 100%;
    display: block;
    color: #4d6f59;
    font-size: 1rem;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
  }
`;
