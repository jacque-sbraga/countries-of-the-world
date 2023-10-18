import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {

        --error: #e63946;
        --fz-100: 14px;
        --fz-200: 16px;
        --fz-300: 18px;

        --fw-light: 300;
        --fw-semi: 600;
        --fw-bold: 800;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        :focus-within {
            scroll-behavior: smooth;
            }

    }


  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
