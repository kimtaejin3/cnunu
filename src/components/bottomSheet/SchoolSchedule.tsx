import { css } from "@emotion/react";

import LEFT_ARROW from "@/assets/icons/left_arrow.svg";
import RIGHT_ARROW_ACTIVE from "@/assets/icons/right_arrow-active.svg";
import { COLORS } from "@/constants";

const SchoolSchedule = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 2rem 0;
          justify-content: center;
          gap: 11rem;
          background: ${COLORS.white};
        `}
      >
        <button>
          <img src={LEFT_ARROW} alt="left_arrow" />
        </button>
        <div
          css={css`
            font-size: 2rem;
            font-family: SUIT-Semibold;
          `}
        >
          8월
        </div>
        <button>
          <img src={RIGHT_ARROW_ACTIVE} alt="right_arrow_active" />
        </button>
      </div>
      <ul
        css={css`
          padding: 0 2rem;
        `}
      >
        <li css={style.scheduleListItem}>
          <div css={style.listHeader}>08.01(목) ~ 08.30(금)</div>
          <div css={style.listContent}>휴학 및 복학 신청</div>
        </li>
        <li css={style.scheduleListItem}>
          <div css={style.listHeader}>08.01(목) ~ 08.30(금)</div>
          <div css={style.listContent}>휴학 및 복학 신청</div>
        </li>
        <li css={style.scheduleListItem}>
          <div css={style.listHeader}>08.01(목) ~ 08.30(금)</div>
          <div css={style.listContent}>휴학 및 복학 신청</div>
        </li>
        <li css={style.scheduleListItem}>
          <div css={style.listHeader}>08.01(목) ~ 08.30(금)</div>
          <div css={style.listContent}>휴학 및 복학 신청</div>
        </li>
        <li css={style.scheduleListItem}>
          <div css={style.listHeader}>08.01(목) ~ 08.30(금)</div>
          <div css={style.listContent}>휴학 및 복학 신청</div>
        </li>
      </ul>
    </div>
  );
};

const style = {
  scheduleListItem: css`
    display: flex;
    align-items: center;
    gap: 2rem;

    padding: 1.5rem 0;
    border-bottom: 0.1rem solid ${COLORS.grayscale200};
  `,
  listHeader: css`
    font-family: SUIT-Semibold;
    font-size: 1.3rem;
    line-height: 18.9px;
    letter-spacing: -0.02em;
    text-align: left;
    color: ${COLORS.grayscale700};
  `,
  listContent: css`
    font-family: SUIT-Regular;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 18.9px;
    letter-spacing: -0.02em;
    text-align: left;
  `,
};

export default SchoolSchedule;
