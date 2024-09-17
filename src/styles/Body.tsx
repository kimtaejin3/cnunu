import { css } from "@emotion/react";
import { ReactNode } from "react";

import { COLORS } from "@/constants";

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => {
  return <div css={BodyCss.container}>{children}</div>;
};

const BodyCss = {
  container: css`
    background-color: ${COLORS.grayscale100};
  `,
};

export default Body;
