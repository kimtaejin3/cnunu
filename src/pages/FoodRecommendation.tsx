import { css } from "@emotion/react";

import BANNER from "@/assets/static/food_recommendation_banner.svg";
import BANNER02 from "@/assets/static/food_recommendation_banner02.svg";
import NavigationBar from "@/components/common/NavigationBar";

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
        <img
          css={css`
            margin-top: -170px !important;
          `}
          src={BANNER02}
          alt="food_recommendation_banner"
        />
      </div>
    </>
  );
};

export default FoodRecommendation;
