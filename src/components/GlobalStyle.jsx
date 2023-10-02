import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: Jost, sans-serif;
  font-size: 24px;
  font-weight: 400;
    color: #fff;
  background-color: #413B3B;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
  display: block;
  max-width: 100%;
  height: auto;
}

  p,
  h1,
  h2,
  h3 {
    margin: 0;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: #fff;
  }
`;
