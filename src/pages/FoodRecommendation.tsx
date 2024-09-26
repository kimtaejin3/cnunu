import { css } from "@emotion/react";

import BANNER from "@/assets/static/food_recommendation_banner.svg";
import NavigationBar from "@/components/common/NavigationBar";
import { COLORS } from "@/constants";

const FoodRecommendation = () => {
  return (
    <>
      <NavigationBar title="맛집 연구소" />
      <div
        css={css`
          img {
            width: 100%;
            margin-top: -30px;
          }
        `}
      >
        <img src={BANNER} alt="food_recommendation_banner" />
        <div
          css={css`
            margin-top: -12rem;
          `}
        >
          <div
            css={css`
              border-top: 4rem solid #46dcfa80;
            `}
          >
            ...
          </div>
          <div
            css={css`
              background: ${COLORS.white};
            `}
          >
            ...
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodRecommendation;
