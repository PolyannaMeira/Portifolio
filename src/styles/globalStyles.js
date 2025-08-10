import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #9333ea; 
    --secondary: #f97316; 
    --background: #121212;
    --background-light: #1e1e1e;
    --text: #ffffff;
    --text-muted: #a3a3a3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
