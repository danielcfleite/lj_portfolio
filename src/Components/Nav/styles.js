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
`;

export const Logo = styled.img`
  height: 50%;
  width: auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.a`
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
`;

export const SocialLink = styled.a`
  transition: 0.2s ease-in-out;
  opacity: 0.6;

  &:hover {
    transform: translateY(-2px);
    opacity: 1;
  }
`;
