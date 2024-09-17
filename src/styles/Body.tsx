import { css } from "@emotion/react";
import { CSSProperties, ReactNode } from "react";

import { COLORS } from "@/constants";

type Props = {
  children: ReactNode;
  sx: CSSProperties;
};

const Body = ({ children, sx }: Props) => {
  return (
    <div style={sx} css={BodyCss.container}>
      {children}
    </div>
  );
};

const BodyCss = {
  container: css`
    background-color: ${COLORS.grayscale100};
  `,
};

export default Body;
