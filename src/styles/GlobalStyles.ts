import styled from 'styled-components'
import mediaQueries from './MediaQueries'

export const SectionStyled = styled.section`
`

export const AppStyled = styled.div`
`

export const ContainerStyled = styled.div`
width: 100%;
padding-right: 1rem;
padding-left: 1rem;
margin-inline: auto;

${mediaQueries({ max: 575.98 })`
    max-width: 320px;
  `}

  ${mediaQueries({ min: 576, max: 767.98 })`
    max-width: 540px;
  `}

  ${mediaQueries({ min: 768, max: 991.98 })`
    max-width: 720px;
  `}

  ${mediaQueries({ min: 992, max: 1199.98 })`
    max-width: 960px;
  `}

  ${mediaQueries({ min: 1200, max: 1399.98 })`
    max-width: 1140px;
  `}

  ${mediaQueries({ min: 1400, max: 1599.98 })`
    max-width: 1320px;
  `}

  ${mediaQueries({ min: 1600 })`
    max-width: 1440px;
  `}
`