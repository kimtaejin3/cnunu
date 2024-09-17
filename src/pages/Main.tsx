import { css } from "@emotion/react";

import { COLORS } from "@/constants";
import Body from "@/styles/Body";

const Main = () => {
  return (
    <Body sx={{ height: "100%" }}>
      <header css={MainCss.header}>
        <h1 css={MainCss.title}>CNU:NU</h1>
        <div css={MainCss.subTitle}>충대 정보 싹 다 모았다</div>
      </header>
      <main css={MainCss.main}>...</main>
    </Body>
  );
};

const MainCss = {
  header: css`
    box-shadow: 0px 2px 4px 0px #00000026;
    background-color: ${COLORS.white};
    padding: 1.8rem 0 0;
    height: 11.4%;
    text-align: center;
  `,
  title: css`
    color: ${COLORS.grayscale900};
    font-size: 2.4rem;
  `,
  subTitle: css`
    color: ${COLORS.grayscale800};
    font-size: 1.4rem;
    margin-top: 0.5rem;
  `,
  main: css`
    height: 88.6%;
  `,
};

export default Main;
