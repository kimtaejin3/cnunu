import { css, keyframes } from "@emotion/react";

import CLOSE from "@/assets/icons/close.svg";
import { COLORS } from "@/constants";

const renderAnimationForBottomSheet = keyframes`
  0%{
    transform: translateY(100%);
  }

  100%{
    transform: translateY(0);
  }
`;

const renderAnimationForShadow = keyframes`
  0%{
    background: rgba(0, 0, 0, 0);
  }
  100%{
    background: rgba(0, 0, 0, 0.2);

  }
`;

type Props = {
  isShow: boolean;
  onClose: () => void;
  title: string;
};

const BottomSheet = ({ isShow, onClose, title }: Props) => {
  if (!isShow) {
    return <></>;
  }
  return (
    <div
      css={css`
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.2);

        animation: ${renderAnimationForShadow} 0.5s;
      `}
    >
      <div
        css={css`
          background: ${COLORS.white};
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 50vh;
          border-radius: 1.6rem 1.6rem 0 0;

          animation: ${renderAnimationForBottomSheet} 0.5s;
          z-index: 9999;
        `}
      >
        <div
          css={css`
            padding: 2rem 2rem;
            display: flex;

            > * {
              flex-basis: 0;
              flex-grow: 1;
              tex-align: center;

              display: flex;
              justify-content: center;
            }

            button {
              justify-content: flex-end;
              align-items: center;
            }
          `}
        >
          <div></div>
          <h2
            css={css`
              font-size: 2rem;
              font-family: SB-aggro;
            `}
          >
            {title}
          </h2>
          <button onClick={onClose}>
            <img src={CLOSE} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
