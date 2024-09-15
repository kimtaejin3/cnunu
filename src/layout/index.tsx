import { css } from "@emotion/react";

const Layout = () => {
  return <div css={layoutCss.container}></div>;
};

const layoutCss = {
  container: css({ backgroundColor: "dodgerblue" }),
};

export default Layout;
