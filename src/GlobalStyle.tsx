import { Global, css } from "@emotion/react";

const baseStyle = css`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
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
