import { css } from "@emotion/react";

import { COLORS } from "@/constants";
import Body from "@/styles/Body";

const Main = () => {
  return (
    <Body sx={{ height: "100%" }}>
      <div css={MainCss.container}>
        <header css={MainCss.header}>
          <h1 css={MainCss.title}>CNU:NU</h1>
          <div css={MainCss.subTitle}>충대 정보 싹 다 모았다</div>
        </header>
        <div css={MainCss.contents}>
          <main css={MainCss.main}>
            <div>
              <div css={MainCss.one}>1</div>
              <div css={MainCss.two}>2</div>
              <div css={MainCss.three}>3</div>
              <div css={MainCss.four}>4</div>
              <div css={MainCss.five}>5</div>
              <div css={MainCss.six}>6</div>
              <div css={MainCss.seven}>7</div>
            </div>
            <div></div>
          </main>
          <footer css={MainCss.footer}>
            팀 소개 링크 / 제안: 1234@gmail.com
          </footer>
        </div>
      </div>
    </Body>
  );
};

const MainCss = {
  container: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  header: css`
    flex-grow: 1;
    box-shadow: 0px 2px 4px 0px #00000026;
    background-color: ${COLORS.white};
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
  contents: css`
    flex-grow: 30;
  `,
  main: css`
    padding: 1.5rem;
  `,
  one: css`
    grid-area: one;
    background-color: dodgerblue;
  `,
  two: css`
    grid-area: two;
    background-color: dodgerblue;
  `,
  three: css`
    grid-area: three;
    background-color: dodgerblue;
  `,
  four: css`
    grid-area: four;
    background-color: dodgerblue;
  `,
  five: css`
    grid-area: five;
    background-color: dodgerblue;
  `,
  six: css`
    grid-area: six;
    background-color: dodgerblue;
  `,
  seven: css`
    grid-area: seven;
    background-color: dodgerblue;
  `,

  footer: css`
    text-align: center;
    margin-top: 2rem;
    color: ${COLORS.grayscale800};
    font-size: 1.4rem;
  `,
};

export default Main;
