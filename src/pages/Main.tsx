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
            <div css={MainCss.leftSection}>
              <div css={MainCss.one}>1</div>
              <div css={MainCss.two}>2</div>
              <div css={MainCss.three}>3</div>
              <div css={MainCss.four}>4</div>
            </div>
            <div css={MainCss.rightSection}>
              <div css={MainCss.five}>5</div>
              <div css={MainCss.six}>6</div>
              <div css={MainCss.seven}>7</div>
            </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    flex-direction: column;
  `,
  main: css`
    flex-grow: 13;
    padding: 1.5rem 1.5rem 0;
    display: flex;
    gap: 1.5rem;
  `,
  leftSection: css`
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    flex-direction: column;
  `,
  rightSection: css`
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    flex-direction: column;
  `,
  one: css`
    flex-grow: 2.3;
    background-color: dodgerblue;
  `,
  two: css`
    flex-grow: 0.7;
    background-color: dodgerblue;
  `,
  three: css`
    flex-grow: 2.3;
    background-color: dodgerblue;
  `,
  four: css`
    flex-grow: 1.3;
    background-color: dodgerblue;
  `,
  five: css`
    flex-grow: 4;
    background-color: dodgerblue;
  `,
  six: css`
    flex-grow: 1.5;
    background-color: dodgerblue;
  `,
  seven: css`
    flex-grow: 1.5;
    background-color: dodgerblue;
  `,

  footer: css`
    flex-grow: 2;
    text-align: center;
    color: ${COLORS.grayscale800};
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2.5rem;
  `,
};

export default Main;
