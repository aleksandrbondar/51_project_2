import styled, { keyframes } from 'styled-components'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDone } from "react-icons/md";

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

const loadIcon = `
  position: fixed;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  font-size: 100px;
  transition: all 0.5s;
  opacity: 0;
  z-index: 3;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadIcon = styled(AiOutlineLoading3Quarters)`
  ${loadIcon}
  color: blue;
  animation: ${spin} 1.2s linear infinite;
`

export const SuccessIcon = styled(MdDone)`
  ${loadIcon}
  color: green;
`
