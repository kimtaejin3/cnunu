import { css } from "@emotion/react";

import { Link } from "react-router-dom";

import plusIcon_black from "@/assets/icons/plus_black.svg";
import plusIcon_white from "@/assets/icons/plus_white.svg";
import CardHeader from "@/components/cards/CardHeader";
import PercentBar from "@/components/PercentBar";
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
                iconSrc={plusIcon_white}
                iconAlt="watch_detail_icon"
              />
              <div css={MainCss.cardBody}>
                <div
                  css={css`
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                  `}
                >
                  혼잡도
                </div>
                <ul css={MainCss.progressBarContainer}>
                  <li>
                    <PercentBar title="1학" progress={80} />
                  </li>
                  <li>
                    <PercentBar title="2학" progress={30} />
                  </li>
                </ul>
              </div>
            </Link>
            <Link to="/" css={MainCss.card_two}>
              <CardHeader
                title="순환버스"
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
            <Link to="/" css={MainCss.card_three}>
              <CardHeader
                title="맛집 연구소"
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
              <p
                css={css`
                  color: ${COLORS.grayscale800};
                  font-size: 1.4rem;
                  margin-top: 1rem;
                  font-weight: 400;
                `}
              >
                내 주머니 사정에 딱 맞는 학교 주변 식당/카페
              </p>
            </Link>
            <Link to="/" css={MainCss.card_four}>
              <CardHeader
                title="인재개발원"
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
          </div>
          <div css={MainCss.rightSection}>
            <Link to="/" css={MainCss.card_five}>
              <CardHeader title="도서관 혼잡도" />
              <div
                css={css`
                  margin-top: 3rem;
                `}
              >
                <ul css={MainCss.progressBarContainer}>
                  <li>
                    <PercentBar title="B2층" progress={80} />
                  </li>
                  <li>
                    <PercentBar title="B1층" progress={30} />
                  </li>
                  <li>
                    <PercentBar title="1층" progress={30} />
                  </li>
                  <li>
                    <PercentBar title="2층" progress={30} />
                  </li>
                  <li>
                    <PercentBar title="3층" progress={30} />
                  </li>
                </ul>
              </div>
            </Link>
            <Link to="/" css={MainCss.card_six}>
              <CardHeader
                title="학사일정"
                iconSrc={plusIcon_black}
                iconAlt="watch_detail_icon"
              />
            </Link>
            <Link to="/" css={MainCss.card_seven}>
              <CardHeader
                title="학과알림"
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
    padding: 0.6rem 0;
    flex-grow: 2.3;
    flex-basis: 0;
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
    font-weight: 700;
    margin-top: 0.5rem;
  `,
  contents: css`
    flex-grow: 30;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
  `,
  main: css`
    flex-grow: 13;
    flex-basis: 0;
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
    flex-basis: 0;
    flex-grow: 2;
    background: ${COLORS.primary700};
    color: ${COLORS.white};
  `,
  card_two: css`
    ${card};
    flex-basis: 0;
    flex-grow: 0.2;
  `,
  card_three: css`
    ${card};
    flex-basis: 0;
    flex-grow: 1.4;
    background: ${COLORS.primary300};
  `,
  card_four: css`
    ${card};
    flex-basis: 0;
    flex-grow: 1.3;
  `,
  card_five: css`
    ${card};
    flex-basis: 0;
    flex-grow: 3.6;
  `,
  card_six: css`
    ${card};
    flex-basis: 0;
    flex-grow: 1.4;
  `,
  card_seven: css`
    ${card};
    flex-basis: 0;
    flex-grow: 1.4;
  `,
  cardBody: css`
    margin: 1rem 0 0;
    border-top: 0.05rem solid ${COLORS.primary150};
    padding-top: 1rem;
  `,
  progressBarContainer: css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,
  footer: css`
    flex-basis: 0;
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
