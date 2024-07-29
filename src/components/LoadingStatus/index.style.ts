import styled from 'styled-components'

export const MessageWrapper = styled.div<{ height: number }>`
position: absolute;
z-index: 4;
top: 0;
right: 1rem;
display: flex;
justify-content: center;
align-items: center;
height: ${(props) => props.height}px;
`

export const MessageStyled = styled.div<{ color: string }>`
transition: all 0.5s ease;
border-radius: 0.5rem;
max-width: 10rem;
max-height: 3rem;
background-color: ${(props) => props.color};
color: white;
padding: 0.5rem;
font-weight: bold;
`