import { NavbarLinkStyled, NavbarListItemStyled, NavbarListStyled, NavbarStyled, NavbarWrapper } from './index.style';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

interface NavbarInterface {
  path: string;
  name: string;
}

const links: NavbarInterface[] = [
  { path: '/', name: 'Main' },
  { path: '/posts', name: 'Blog' },
  { path: '/users', name: 'Customers' },
  { path: '/products', name: 'Products' },
];

export const navbarHeight: number = 56;

const Navbar = () => {
  const isMobile = window.innerWidth < 767.9;
  const [isMenuShow, setisMenuShow] = useState(false);

  return (
    <NavbarWrapper style={{ height: `${navbarHeight}px` }}>
      {isMobile && (
        <IconButton
          onClick={() => setisMenuShow(!isMenuShow)}
          style={{ transform: isMenuShow ? 'rotate(90deg)' : 'rotate(0deg)' }}
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      )}
      <NavbarStyled style={{ height: `${navbarHeight}px` }} >
        <NavbarListStyled
          style={isMobile ? isMenuShow ? { height: `${navbarHeight * 4}px` } : { height: `${0}` } : { height: `${navbarHeight}px` }} >
          {links.map((link: NavbarInterface, index: number) => (
            <NavbarListItemStyled key={index}>
              <NavbarLinkStyled onClick={() => { if (isMobile) setisMenuShow(false) }} to={link.path} height={navbarHeight}>{link.name}</NavbarLinkStyled>
            </NavbarListItemStyled>
          ))}
        </NavbarListStyled>
      </NavbarStyled>
    </NavbarWrapper>
  );
};

export default Navbar;