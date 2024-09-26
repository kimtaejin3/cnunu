import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import HOME from "@/assets/icons/home.svg";
import NavigationBar from "@/components/common/NavigationBar";
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
          padding: 0 1.5rem;
        `}
      >
        <div
          css={css`
            background: ${COLORS.white};
            padding: 1.5rem 1.5rem 2rem;
          `}
        >
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
        </div>
      </div>
    </>
  );
};

export default FoodReport;
