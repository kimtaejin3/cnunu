import { css } from "@emotion/react";

import { CSSProperties } from "react";

import ListCategory from "../common/ListCategory";

import LEFT_ARROW from "@/assets/icons/left_arrow.svg";

import RIGHT_ARROW__ACTIVE from "@/assets/icons/right_arrow-active.svg";
import { COLORS } from "@/constants";

const MealTimeArea = () => {
  return (
    <div
      css={css`
        margin-top: 0;
        background-color: ${COLORS.white};
        position: relative;
      `}
    >
      <div css={style.datepickArea}>
        <button>
          <img src={LEFT_ARROW} alt="left_arow__active" />
        </button>
        <div
          css={css`
            position: relative;
          `}
        >
          <TodayTag
            sx={{
              position: "absolute",
              top: "-1.6rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <h2>8.21 (목)</h2>
        </div>
        <button>
          <img src={RIGHT_ARROW__ACTIVE} alt="right_arrow" />
        </button>
      </div>
      {/* <ul
        css={css`
          display: flex;
        `}
      >
        <li css={listItemStyle(false)}>
          <button>아침</button>
        </li>
        <li css={listItemStyle(true)}>
          <button>점심</button>
        </li>
        <li css={listItemStyle(false)}>
          <button>저녁</button>
        </li>
      </ul> */}
      <ListCategory datas={["아침", "점심", "저녁"]} selectedData="점심" />
    </div>
  );
};

const TodayTag = ({ sx }: { sx?: CSSProperties }) => {
  return (
    <span
      style={sx}
      css={css`
        border-radius: 6.5rem;
        background-color: ${COLORS.primary300};
        padding: 0.1rem 0.8rem 0.2rem 0.8rem;
      `}
    >
      today
    </span>
  );
};

const style = {
  datepickArea: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0 2rem;
    gap: 8rem;

    h2 {
      font-family: SUIT-SemiBold;
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.8rem;
      letter-spacing: -0.02em;
      text-align: left;
    }
  `,
};

export default MealTimeArea;
