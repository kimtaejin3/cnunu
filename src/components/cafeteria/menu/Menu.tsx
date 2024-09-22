import { css } from "@emotion/react";
import { ReactNode } from "react";

import STAR from "@/assets/icons/star.svg";
import { COLORS } from "@/constants";

type Props = {
  cafeteriaName: string;
  children: ReactNode;
};

const Menu = ({ cafeteriaName, children }: Props) => {
  return (
    <div
      css={css`
        background-color: ${COLORS.white};
        border-radius: 0.8rem;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.2rem;
          background-color: ${COLORS.grayscale100};
        `}
      >
        <h3
          css={css`
            font-size: 1.6rem;
          `}
        >
          {cafeteriaName}
        </h3>
        <button>
          <img src={STAR} alt="star" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Menu;
