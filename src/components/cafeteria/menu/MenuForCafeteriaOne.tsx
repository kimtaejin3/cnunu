import { css } from "@emotion/react";

import Menu from "./Menu";

import NEXT_ARROW from "@/assets/icons/next_arrow.svg";
import { COLORS } from "@/constants";

const MenuForCafeteriaOne = () => {
  return (
    <Menu cafeteriaName="1학">
      <div
        css={css`
          padding: 1.2rem;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              color: ${COLORS.grayscale700};
              font-size: 1.2rem;
            `}
          >
            푸드코트 운영
          </div>
          <div
            css={css`
              font-size: 1.2rem;
            `}
          >
            2,500원~
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1rem;
          `}
        >
          <span
            css={css`
              font-size: 1.4rem;
              color: ${COLORS.primary800};
            `}
          >
            메뉴 보러가기
          </span>
          <img src={NEXT_ARROW} alt="right_arow-active" />
        </div>
      </div>
    </Menu>
  );
};

export default MenuForCafeteriaOne;
