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
    max-width: 37.5rem;
    background: red;
    margin: 0 auto;
  `,
};

export default Layout;
