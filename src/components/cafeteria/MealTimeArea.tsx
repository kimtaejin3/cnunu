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
      <ul
        css={css`
          display: flex;
        `}
      >
        <li css={style.listItem}>
          <button>아침</button>
        </li>
        <li css={style.listItem}>
          <button>점심</button>
        </li>
        <li css={style.listItem}>
          <button>저녁</button>
        </li>
      </ul>
    </div>
  );
};

const style = {
  listItem: css`
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  `,
};

export default MealTimeArea;
