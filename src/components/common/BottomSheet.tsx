import { css, keyframes } from "@emotion/react";

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

const BottomSheet = () => {
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
        `}
      >
        ...
      </div>
    </div>
  );
};

export default BottomSheet;
