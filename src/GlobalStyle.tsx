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
    font-family: "SUIT-Regular";
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

  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
