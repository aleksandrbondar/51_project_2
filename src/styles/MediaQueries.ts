import { css } from 'styled-components';

interface MediaQueriesProps {
  min?: number;
  max?: number;
}

const mediaQueries = ({ min = 0, max = 4096 }: MediaQueriesProps) => (styles: TemplateStringsArray) => {
  return css`
    @media (min-width: ${min}px) and (max-width: ${max}px) {
      ${styles}
    }
  `;
};

export default mediaQueries;