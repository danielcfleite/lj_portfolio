import styled from "styled-components";

export const NavContainer = styled.div`
  height: 13vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #a9a9a9;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 90%;
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

  &:hover {
    border-bottom: 2px solid #a9a9a9;
  }
`;

export const SocialLink = styled.a`
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;
