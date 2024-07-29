import styled from 'styled-components'
import { navbarHeight } from '../../components/Navbar'
import { Link } from 'react-router-dom'

export const Hero = styled.div`
  transition: all 0.5s ease;
  position: relative;
  height: calc(100vh - ${navbarHeight}px);
  background: radial-gradient(circle, orange, red, purple, blue, black);
  overflow: hidden;
`

export const HeroLoadingStyled = styled.div`
  position: absolute;
  top: ${navbarHeight}px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`
// Общие стили для всех HeroItem
const commonWrapperStyles = `
  position: absolute;
  overflow: hidden;
  transition: all 1s;
`;

// Wrapper 1
export const HeroWrapper$1 = styled.div`
  ${commonWrapperStyles}
  top: -2px;
  left: -2px;
  height: calc(100vh - ${navbarHeight}px);
  width: 50vw;
`;

// Wrapper 2
export const HeroWrapper$2 = styled.div`
  ${commonWrapperStyles}
  top: -2px;
  right: -2px;
  height: calc(100vh - ${navbarHeight}px);
  width: 50vw;
`;

// Wrapper 3
export const HeroWrapper$3 = styled.div`
  ${commonWrapperStyles}
  bottom: -2px;
  left: 0;
  right: 0;
  height: calc(50vh - ${navbarHeight / 2}px);
  width: 100vw;
`

export const HeroItem = `
  display: grid;
  justify-content: center;
  height: 100%;
  width: 100%;
  image-rendering: pixelated;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s ease;
  filter: brightness(50%) grayscale(50%) blur(2px);
  &:hover {
    filter: brightness(100%) grayscale(0%) blur(0px);
    transform: scale(1.1);
  }
  `
export const HeroItem$1 = styled.div`
${HeroItem}
& div {
  color: white;
  top: 40%;
  left: 20%;
}
&:hover div {
  top: 20%;
  left: 50%;
}
`
export const HeroItem$2 = styled.div`
${HeroItem}
& div {
  color: white;
  top: 20%;
  left: 20%;
}
&:hover div {
  top: 60%;
  left: 50%;
}
`

export const HeroItem$3 = styled.div`
${HeroItem}
& div {
  color: white;
  bottom: 0;
  right: 50%;
}
&:hover div {
  bottom: 30%;
  right: 0;
}
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 1rem;
  transition: all 1s ease;
  transform: translate(-50%, -50%);

`

export const Title = styled.h2`
max-width: 14rem;
  text-align: center;
  text-shadow: 0px 0px 5px black;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0, 123, 255, 1);
  }
`