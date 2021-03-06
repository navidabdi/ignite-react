// Global Styles
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
      text-decoration: none;
      display: block;
      color: #455A64;
  }
  ::-webkit-scrollbar {
      width: .5rem;
  }
  ::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 50px;
  }
  img {
      max-width: 100%;
      width: 100%;
      display: block;
  }
  body {
      background-color: #ECEFF1;
      color: #455A64;
      font-family: 'Montserrat', sans-serif;
      overflow-x: hidden;
  }
  h2 {
      font-size: 2rem;
      color: #37474F;
  }
  .container {
      max-width: 90%;
      margin: auto;
  }
`;

export default GlobalStyle;
