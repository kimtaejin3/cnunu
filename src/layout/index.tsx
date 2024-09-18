import { css } from "@emotion/react";
import { ReactNode } from "react";

import { COLORS } from "@/constants";

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
    background-color: ${COLORS.white};
    height: 100svh;
  `,
};

export default Layout;
