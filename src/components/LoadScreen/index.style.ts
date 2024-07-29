import styled from 'styled-components'

export const LoadScreenStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.5s;
  opacity: 1;
  display: block;

  & .loadIcon {
  display: block;
  transition: all 0.5s;
  opacity: 0;
  z-index: 3;
  position: fixed;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  }

  & .successIcon {
  display: block;
  transition: all 0.5s;
  opacity: 0;
  z-index: 3;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: green;
  }
`