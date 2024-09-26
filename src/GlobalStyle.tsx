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

  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  img {
    vertical-align: top;
  }

  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT-SemiBold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2")
      format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT-Bold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT-ExtraBold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-ExtraBold.woff2")
      format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "SBAggroM";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff")
      format("woff");
    font-style: normal;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
