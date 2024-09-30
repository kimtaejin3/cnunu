import { css } from "@emotion/react";

import NEXT_ARROW from "@/assets/icons/next_arr_for_card.svg";
import { COLORS } from "@/constants";

type Props = {
  category: string;
  title: string;
};

const NotificationCard = (props: Props) => {
  const { category, title } = props;

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        align-items: center;
        border: 1px solid ${COLORS.grayscale300};
        padding: 1.2rem 1.6rem;
        border-radius: 0.8rem;
      `}
    >
      <div>
        <div>
          <h2
            css={css`
              font-size: 1.6rem;
              line-height: 2.4rem;
              position: relative;

              &::after {
                content: " ";
                display: inline-block;
                position: absolute;
                width: 0.5rem;
                height: 0.5rem;
                background: red;
                transform: translateX(4px);
                border-radius: 50%;
              }
            `}
          >
            <span
              css={css`
                color: ${COLORS.primary500};
              `}
            >
              [{category}]{" "}
            </span>

            {title}
          </h2>
        </div>
        <div
          css={css`
            color: ${COLORS.grayscale600};
            font-size: 1.4rem;
            margin-top: 0.8rem;
          `}
        >
          2024-09-30
        </div>
      </div>
      <a href="/">
        <img src={NEXT_ARROW} alt="next_arrow" />
      </a>
    </div>
  );
};

export default NotificationCard;
