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
    line-height: 1.7;
    color: var(--font-color);
    background-color: var(--color-grey-dark-1);
    font-size: 1.6rem;
  }

  :root {
    --color-primary: #025a7c;
    --color-primary-light: #078ec1;
    --color-primary-dark: #2b373c;
    --color-secondary: #ffb400;
    -color-white: #fff;
    -color-black: #000;
    --color-grey-dark-1: #434343;
    --color-grey-dark-2: #333;
    --font-color: #f7f7f7;
    --font-color-dark: #333;
    --radius: 0.5rem;
  }
`;
