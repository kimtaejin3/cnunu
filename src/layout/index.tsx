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
    margin: 0 auto;
    height: 100vh;
  `,
};

export default Layout;
