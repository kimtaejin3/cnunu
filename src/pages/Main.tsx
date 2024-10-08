import { css } from "@emotion/react";

import { Link } from "react-router-dom";

import BELL from "@/assets/icons/bell.svg";
import PLUS_ICON_BLACK from "@/assets/icons/plus_black.svg";
import PLUS_ICON_WHITE from "@/assets/icons/plus_white.svg";
import SchoolSchedule from "@/components/bottomSheet/SchoolSchedule";
import CardHeader from "@/components/cards/CardHeader";
import BottomSheet from "@/components/common/BottomSheet";
import PercentBar from "@/components/common/PercentBar";
import { COLORS } from "@/constants";
import useBottomSheet from "@/hooks/useBottomSheet";

const Main = () => {
  const { isShow, handleClose, handleOpen } = useBottomSheet();

  return (
    <>
      <div css={MainCss.container}>
        <BottomSheet isShow={isShow} onClose={handleClose} title="학사 일정">
          <SchoolSchedule />
        </BottomSheet>
        <header css={MainCss.header}>
          <div>
            <h1 css={MainCss.title}>CNU:NU</h1>
            <div css={MainCss.subTitle}>충대 정보 싹 다 모았다</div>
          </div>
          <button>
            <img src={BELL} alt="bell" />
          </button>
        </header>
        <div css={MainCss.contents}>
          <main css={MainCss.main}>
            <div css={MainCss.leftSection}>
              <Link to="/cafeteria" css={MainCss.card_one}>
                <CardHeader
                  title="오늘의 학식"
                  iconSrc={PLUS_ICON_WHITE}
                  iconAlt="watch_detail_icon"
                />
                <div css={MainCss.cardBody}>
                  <div
                    css={css`
                      font-size: 1.4rem;
                      font-weight: 700;
                      margin-bottom: 1rem;
                    `}
                  >
                    혼잡도
                  </div>
                  <div
                    css={css`
                      flex-grow: 1;
                    `}
                  >
                    <ul css={MainCss.progressBarContainer}>
                      <li>
                        <PercentBar title="1학" progress={80} />
                      </li>
                      <li>
                        <PercentBar title="2학" progress={30} />
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
              <Link to="/bus" css={MainCss.card_two}>
                <CardHeader
                  title="순환버스"
                  iconSrc={PLUS_ICON_BLACK}
                  iconAlt="watch_detail_icon"
                />
              </Link>
              <Link to="/food-recommendation" css={MainCss.card_three}>
                <CardHeader
                  title="맛집 연구소"
                  iconSrc={PLUS_ICON_BLACK}
                  iconAlt="watch_detail_icon"
                />
                <p
                  css={css`
                    color: ${COLORS.grayscale800};

                    @media (max-width: 375px) {
                      font-size: 1.2rem;
                    }

                    font-size: 1.4rem;

                    margin-top: 1rem;
                    font-weight: 400;
                  `}
                >
                  내 주머니 사정에 딱 맞는 학교 주변 식당/카페
                </p>
              </Link>
              <Link to="/hrd-center-notification" css={MainCss.card_four}>
                <CardHeader
                  title="인재개발원"
                  iconSrc={PLUS_ICON_BLACK}
                  iconAlt="watch_detail_icon"
                />
              </Link>
            </div>
            <div css={MainCss.rightSection}>
              <Link to="/" css={MainCss.card_five}>
                <CardHeader title="도서관 혼잡도" />
                <div
                  css={css`
                    flex-grow: 1;
                    margin-top: 1.5rem;
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
              <Link to="/" css={MainCss.card_six} onClick={handleOpen}>
                <CardHeader
                  title="학사일정"
                  iconSrc={PLUS_ICON_BLACK}
                  iconAlt="watch_detail_icon"
                />
                <p
                  css={css`
                    color: ${COLORS.grayscale800};

                    @media (max-width: 375px) {
                      font-size: 1.2rem;
                    }

                    font-size: 1.4rem;

                    margin-top: 1rem;
                    font-weight: 400;
                  `}
                >
                  오늘 일정 없음
                </p>
              </Link>
              <Link to="/department-notification" css={MainCss.card_seven}>
                <CardHeader
                  title="학과소식"
                  iconSrc={PLUS_ICON_BLACK}
                  iconAlt="watch_detail_icon"
                />
              </Link>
            </div>
          </main>
          <div css={MainCss.footer}>팀 소개 / 링크 제안: 1234@gmail.com</div>
        </div>
      </div>
    </>
  );
};

const card = css`
  box-shadow: 1px 2px 4px 0px #00000026;
  border-radius: 0.8rem;
  background-color: ${COLORS.white};
  padding: 1.4rem 0.8rem;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const MainCss = {
  container: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  `,
  header: css`
    padding: 0.7rem 1.5rem 0.5rem;
    flex-grow: 2.3;
    flex-basis: 0;
    box-shadow: 0px 2px 4px 0px #00000026;
    background-color: ${COLORS.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  title: css`
    color: ${COLORS.grayscale900};
    font-family: SB-Aggro;
    font-size: 2.4rem;
  `,
  subTitle: css`
    color: ${COLORS.grayscale800};
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 0.2rem;
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
    gap: 1.5vh;
  `,
  leftSection: css`
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    gap: 1.8vh;
    flex-direction: column;
  `,
  rightSection: css`
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    gap: 1.8vh;
    flex-direction: column;
  `,
  card_one: css`
    ${card};
    flex-basis: 0;
    flex-grow: 2;
    background: ${COLORS.primary700};
    color: ${COLORS.white};
    display: flex;
    flex-direction: column;
  `,
  card_two: css`
    ${card};
    flex-basis: 0;
    flex-grow: 0.2;
  `,
  card_three: css`
    ${card};
    flex-basis: 0;
    flex-grow: 1.9;
    background: ${COLORS.primary300};
  `,
  card_four: css`
    ${card};
    flex-basis: 0;
    flex-grow: 1;
  `,
  card_five: css`
    ${card};
    flex-basis: 0;
    flex-grow: 3.6;
    display: flex;
    flex-direction: column;
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `,
  progressBarContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    gap: 1rem;
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
