import { css } from "@emotion/react";

import { COLORS } from "@/constants";

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
      <ul
        css={css`
          display: flex;
        `}
      >
        <li css={style(false).listItem}>
          <button>아침</button>
        </li>
        <li css={style(true).listItem}>
          <button>점심</button>
        </li>
        <li css={style(false).listItem}>
          <button>저녁</button>
        </li>
      </ul>
    </div>
  );
};

const style = (isActive: boolean) => ({
  listItem: css`
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    border-bottom: ${isActive
      ? `2px solid ${COLORS.primary800}`
      : `2px solid ${COLORS.grayscale300}`};
    padding-bottom: 1rem;
    button {
      font-family: SUIT;
      color: ${isActive ? COLORS.black : "rgba(0, 0, 0, 0.5)"};
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }
  `,
});

export default MealTimeArea;
