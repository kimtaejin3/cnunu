import { css } from "@emotion/react";

import { COLORS } from "@/constants";

const Main = () => {
  return (
    <div css={MainCss.container}>
      <header css={MainCss.header}>
        <h1 css={MainCss.title}>CNU:NU</h1>
        <div css={MainCss.subTitle}>충대 정보 싹 다 모았다</div>
      </header>
      <div css={MainCss.contents}>
        <main css={MainCss.main}>
          <div css={MainCss.leftSection}>
            <div css={MainCss.card_layout_one}>1</div>
            <div css={MainCss.card_layout_two}>2</div>
            <div css={MainCss.card_layout_three}>3</div>
            <div css={MainCss.card_layout_four}>4</div>
          </div>
          <div css={MainCss.rightSection}>
            <div css={MainCss.card_layout_five}>5</div>
            <div css={MainCss.card_layout_six}>6</div>
            <div css={MainCss.card_layout_seven}>7</div>
          </div>
        </main>
        <footer css={MainCss.footer}>
          팀 소개 링크 / 제안: 1234@gmail.com
        </footer>
      </div>
    </div>
  );
};

const cardLayout = css`
  box-shadow: 1px 2px 4px 0px #00000026;
  border-radius: 0.8rem;
  background-color: ${COLORS.white};
`;

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
  card_layout_one: css`
    ${cardLayout};
    flex-grow: 2.3;
  `,
  card_layout_two: css`
    ${cardLayout};
    flex-grow: 0.7;
  `,
  card_layout_three: css`
    ${cardLayout};
    flex-grow: 2.3;
  `,
  card_layout_four: css`
    ${cardLayout};
    flex-grow: 1.3;
  `,
  card_layout_five: css`
    ${cardLayout};
    flex-grow: 4;
  `,
  card_layout_six: css`
    ${cardLayout};
    flex-grow: 1.5;
  `,
  card_layout_seven: css`
    ${cardLayout};
    flex-grow: 1.5;
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
