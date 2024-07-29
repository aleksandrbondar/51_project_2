import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  position: relative;
  padding-left: 1rem;

  & button {
    color: white;
    z-index: 4;
    background-color: black;
    transition: all 0.5s ease;
    transform: translate(-50%, -50%);

    & svg {
    font-size: 2rem;}
  }
`

export const NavbarStyled = styled.nav`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`

export const NavbarListStyled = styled.ul`
  overflow: hidden;
  transition: height 0.5s ease;
  background-color: black;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 767.9px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const NavbarListItemStyled = styled.li`
`
export const NavbarLinkStyled = styled(NavLink) <{ height: number }>`
  height: ${(props) => props.height > 0 ? `${props.height}px` : 'auto'};
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: white;
  transition: background-color 0.3s ease;

  &.active,
  &:hover {
    background-color: #007bff;
  }
`;