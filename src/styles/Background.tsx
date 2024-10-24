import { css } from "@emotion/react";
import { CSSProperties } from "react";

import { Outlet } from "react-router-dom";

type Props = {
  sx?: CSSProperties;
  color: string;
};

const Background = ({ sx, color }: Props) => {
  return (
    <div style={sx} css={BackgroundCss(color).container}>
      <Outlet />
    </div>
  );
};

const BackgroundCss = (color: string) => ({
  container: css`
    background-color: ${color};
    height: 100%;
    position: relative;
  `,
});

export default Background;
