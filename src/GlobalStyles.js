import {createGlobalStyle} from 'styled-components/macro';

const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: var(--font-color);
    background-color: var(--color-black);
    font-size: 1.6rem;
  }

  :root {
    --color-primary: #025a7c;
    --color-primary-light: #078ec1;
    --color-primary-dark: #2b373c;
    --color-secondary: #ffb400;
    --color-white: #fff;
    --color-black: #000;
    --color-grey-dark-1: #434343;
    --color-grey-dark-2: #333;
    --font-color: #f7f7f7;
    --font-color-dark: #333;
    --tag-color-1: #3651df;
    --tag-color-2: #0375a1;
    --tag-color-3: #4008af;
    --tag-color-4: #025a7c;
    --tag-color-5: #c58c00;
    --radius: 0.5rem;
    --radius-small: 0.25rem;
    --lh: 1.4rem;
  }
`;
