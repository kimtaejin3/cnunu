import { css } from "@emotion/react";

import MenuHeader from "./MenuHeader";

import MenuType from "./MenuType";

import NEXT_ARROW from "@/assets/icons/next_arrow.svg";
import OneCafeteria from "@/components/bottomSheet/OneCafeteria";
import BottomSheet from "@/components/common/BottomSheet";
import { COLORS } from "@/constants";
import useBottomSheet from "@/hooks/useBottomSheet";

const MenuForCafeteriaNeedPopup = () => {
  const { isShow, handleClose, handleOpen } = useBottomSheet();

  return (
    <div>
      <BottomSheet isShow={isShow} onClose={handleClose} title="1학 메뉴">
        <OneCafeteria />
      </BottomSheet>
      <div
        css={css`
          border-radius: 0.8rem;
          overflow: hidden;
        `}
      >
        <MenuHeader cafeteriaName="1학" />
        <div
          css={css`
            padding: 1.2rem;
            background-color: ${COLORS.white};
          `}
        >
          <MenuType typeName="푸트코드 운영" price="2,500원~" />
          <button
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 1rem;
              width: 100%;
            `}
            onClick={handleOpen}
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuForCafeteriaNeedPopup;
