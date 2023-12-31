import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    padding: 30px;
    background-color: #011121;
  }

  h1 {
    margin-bottom: 8px;
  }
`;

export default Global;
