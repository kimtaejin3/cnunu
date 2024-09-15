import { css } from "@emotion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div css={layoutCss.container}>{children}</div>;
};

const layoutCss = {
  container: css`
    background-color: red;
  `,
};

export default Layout;
