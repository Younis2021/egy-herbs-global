import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-padding-top: 2rem;
    scroll-behavior: smooth;
  }


  :root {
    --green-color: #3cb815;
    --light-green-color: #c0eb7b;
    --orange-color: #ff7e00;
    --light-orange-color: #ff7e00;
    --text-color: #1a2428;
    --bg-color: #fff;
  }

  body {
    color: var(--text-color);
  }

  .link, ul {
    list-style: none;
    text-decoration: none;
    width: fit-content;
  }
`;

export default GlobalStyle;
