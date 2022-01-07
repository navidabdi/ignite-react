// Global Styles 
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
      max-width: 100%;
      width: 100%;
  }
  body {
      font-family: sans-serif;
  }
  .container {
      max-width: 90%;
      margin: auto;
  }
`;
 
export default GlobalStyle;