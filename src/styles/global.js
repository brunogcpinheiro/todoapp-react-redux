import { injectGlobal } from 'styled-components';

injectGlobal`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;
