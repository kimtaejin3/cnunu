import { Global, css } from "@emotion/react";

import { COLORS } from "./constants";

const baseStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${COLORS.bg};
  }

  li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input:focus {
    outline: none;
  }

  button:focus {
    outline: none;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
