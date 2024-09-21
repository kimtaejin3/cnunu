import { css } from "@emotion/react";

const MealTimeArea = () => {
  return (
    <div
      css={css`
        margin-top: 0;
      `}
    >
      <div>
        <button>{"<"}</button>
        <span>8월 21일 (목)</span>
        <button>{">"}</button>
      </div>
      <div></div>
    </div>
  );
};

export default MealTimeArea;
