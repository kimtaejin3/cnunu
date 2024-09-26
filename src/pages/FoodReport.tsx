import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import HOME from "@/assets/icons/home.svg";
import Map from "@/assets/static/map.png";
import PAY_REPORT from "@/assets/static/pay_report.png";
import NavigationBar from "@/components/common/NavigationBar";
import RandomPickCard from "@/components/foodLab/RandomPickCard";
import { COLORS } from "@/constants";

const FoodReport = () => {
  return (
    <>
      <NavigationBar
        title="맛집 보고서"
        element={
          <Link to="/">
            <img src={HOME} alt="home_icon" />
          </Link>
        }
      />
      <div
        css={css`
          padding: 0 1.5rem 5rem;
        `}
      >
        <div
          css={css`
            // background: ${COLORS.white};
            position: relative;
            padding: 1.5rem 1.5rem 5rem;
            z-index: 1;
            min-height: 60rem;
          `}
        >
          <img
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            `}
            src={PAY_REPORT}
            alt="pay_report"
          />
          <div
            css={css`
              text-align: right;
            `}
          >
            2024-09-25
          </div>
          <h2
            css={css`
              font-family: "SUIT-Bold";
              font-size: 2rem;
              line-height: 1.5;
              letter-spacing: -0.02em;
              text-align: left;
            `}
          >
            제출한 요청서 속<br />
            조건에 맞는 업체를
            <br />
            선별해보았어요
            <br />
          </h2>

          <ul
            css={css`
              margin-top: 1.8rem;
              padding: 2rem 0;
              border: 0.15rem solid ${COLORS.grayscale200};
              border-right: 0;
              border-left: 0;
              display: flex;
              > * {
                flex-basis: 0;
                flex-grow: 1;
                text-align: center;
              }
            `}
          >
            <li
              css={css`
                display: flex;
                flex-direction: column;
                gap: 1rem;
              `}
            >
              <div
                css={css`
                  font-size: 1.2rem;
                  color: ${COLORS.grayscale600};
                `}
              >
                1인 가격대
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: ${COLORS.grayscale900};
                  font-family: SUIT-SemiBold;
                `}
              >
                1-2만원
              </div>
            </li>
            <li
              css={css`
                display: flex;
                flex-direction: column;
                gap: 1rem;
                border: 0.1rem solid ${COLORS.grayscale200};
                border-top: 0;
                border-bottom: 0;
              `}
            >
              <div
                css={css`
                  font-size: 1.2rem;
                  color: ${COLORS.grayscale600};
                `}
              >
                지역
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: ${COLORS.grayscale900};
                  font-family: SUIT-SemiBold;
                `}
              >
                궁동
              </div>
            </li>
            <li
              css={css`
                display: flex;
                flex-direction: column;
                gap: 1rem;
              `}
            >
              <div
                css={css`
                  font-size: 1.2rem;
                  color: ${COLORS.grayscale600};
                `}
              >
                카테고리
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: ${COLORS.grayscale900};
                  font-family: SUIT-SemiBold;
                `}
              >
                식당/카페
              </div>
            </li>
          </ul>
          <div
            css={css`
              display: flex;
              gap: 1rem;
              margin-top: 2.5rem;
              > * {
                flex-basis: 0;
                flex-grow: 1;
              }
            `}
          >
            <RandomPickCard
              type="식당"
              menuType="카레"
              name="고씨네 카레"
              signatureMenu="고씨네 모둠 카레"
              price="5000-10000원"
            />
            <RandomPickCard
              type="식당"
              menuType="카레"
              name="고씨네 카레"
              signatureMenu="고씨네 모둠 카레"
              price="5000-10000원"
            />
          </div>
          <div
            css={css`
              color: ${COLORS.grayscale600};
              font-size: 1.6rem;
              margin: 3rem 0 1.5rem;
            `}
          >
            위치
          </div>

          <div>
            <img src={Map} alt="map" />
          </div>

          <button
            css={css`
              width: 100%;
              border-radius: 0.8rem;
              color: ${COLORS.white};
              background: ${COLORS.primary350};
              margin-top: 2rem;
              padding: 1.5rem 0;
              font-size: 1.6rem;
            `}
          >
            공유하기
          </button>

          <div
            css={css`
              font-size: 1.4rem;
              text-align: center;
              margin-top: 1rem;
              color: ${COLORS.grayscale600};
            `}
          >
            처음부터 다시하기{" "}
            <span
              css={css`
                color: ${COLORS.primary500};
              `}
            >
              {">>"}
            </span>
          </div>
        </div>
        <div
          css={css`
            color: ${COLORS.grayscale400};
          `}
        >
          <p
            css={css`
              font-family: SUIT;

              font-size: 12px;
              font-weight: 700;
              line-height: 16.2px;
              letter-spacing: -0.02em;
              text-align: left;

              margin: 2rem 0 1rem;
            `}
          >
            꼭 알아두세요!
          </p>

          <ul>
            <li
              css={css`
                font-size: 1.2rem;
                display: flex;
                align-items: flex-start;
                gap: 1rem;

                &:before {
                  flex-shrink: 0;
                  transform: translateY(-10%);
                  content: " ";
                  width: 0.5rem;
                  height: 0.5rem;
                  background-color: ${COLORS.grayscale400};
                  display: inline-block;
                  border-radius: 50%;
                  position: relative;
                  bottom: -0.4rem;
                }
              `}
            >
              CNU:NU의 맛집 연구소 기능은 단순 정보 제공에 목적을 두고 있기에,
              방문 시 발생하는 문제에 대해서 책임지지 않습니다.
            </li>
            <li
              css={css`
                font-size: 1.2rem;
                display: flex;
                gap: 1rem;
                margin-top: 0.5rem;

                &:before {
                  flex-shrink: 0;
                  transform: translateY(-10%);
                  content: " ";
                  width: 0.5rem;
                  height: 0.5rem;
                  background-color: ${COLORS.grayscale400};
                  display: inline-block;
                  border-radius: 50%;
                  position: relative;
                  bottom: -0.4rem;
              `}
            >
              영입 일시 및 기타 정보는 자세히 보기를 통해 네이버 플레이스로
              이동하셔서 확인하길 바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FoodReport;
