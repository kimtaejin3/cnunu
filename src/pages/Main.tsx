import { css } from "@emotion/react";

import { Link } from "react-router-dom";

import plusIcon_black from "@/assets/icons/plus_black.svg";
import plusIcon_white from "@/assets/icons/plus_white.svg";
import CardHeader from "@/components/cards/CardHeader";
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
            <Link to="/" css={MainCss.card_one}>
              <CardHeader
                title="오늘의 학식"
                titleColor={COLORS.white}
                iconSrc={plusIcon_white}
                iconAlt="watch_detail_icon"
              />
            </Link>
            <Link to="/" css={MainCss.card_two}>
              <CardHeader
                title="순환버스"
                titleColor={COLORS.black}
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
            <Link to="/" css={MainCss.card_three}>
              <CardHeader
                title="맛집 연구소"
                titleColor={COLORS.black}
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
            <Link to="/" css={MainCss.card_four}>
              <CardHeader
                title="인재개발원"
                titleColor={COLORS.black}
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
          </div>
          <div css={MainCss.rightSection}>
            <Link to="/" css={MainCss.card_five}>
              <CardHeader title="도서관 혼잡도" titleColor={COLORS.black} />
            </Link>
            <Link to="/" css={MainCss.card_six}>
              <CardHeader
                title="학사일정"
                titleColor={COLORS.black}
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
            <Link to="/" css={MainCss.card_seven}>
              <CardHeader
                title="학과알림"
                titleColor={COLORS.black}
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
          </div>
        </main>
        <footer css={MainCss.footer}>
          팀 소개 링크 / 제안: 1234@gmail.com
        </footer>
      </div>
    </div>
  );
};

const card = css`
  box-shadow: 1px 2px 4px 0px #00000026;
  border-radius: 0.8rem;
  background-color: ${COLORS.white};
  padding: 1.4rem 0.8rem;
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
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    flex-direction: column;
  `,
  rightSection: css`
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    flex-direction: column;
  `,
  card_one: css`
    ${card};
    flex-grow: 2.3;
    background: ${COLORS.primary700};
  `,
  card_two: css`
    ${card};
    flex-grow: 0.7;
  `,
  card_three: css`
    ${card};
    flex-grow: 2.3;
    background: ${COLORS.primary300};
  `,
  card_four: css`
    ${card};
    flex-grow: 1.3;
  `,
  card_five: css`
    ${card};
    flex-grow: 4;
  `,
  card_six: css`
    ${card};
    flex-grow: 1.5;
  `,
  card_seven: css`
    ${card};
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
