import { css } from "@emotion/react";

import { useState } from "react";

import { COLORS } from "@/constants";

const Notification = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        align-items: flex-end;
      `}
    >
      <div
        css={css`
          color: ${COLORS.grayscale600};
          font-size: 1.2rem;
        `}
      >
        새글알림
      </div>
      <div
        onClick={() => setIsClicked((prevState) => !prevState)}
        css={css`
          background: ${isClicked ? COLORS.primary300 : COLORS.grayscale200};
          color: ${COLORS.grayscale50};
          width: 5.5rem;
          height: 2.4rem;
          border-radius: 1.2rem;
          margin-right: -0.7rem;
          position: relative;
          cursor: pointer;
        `}
      >
        <div
          css={css`
            background: ${COLORS.white};
            width: 1.85rem;
            height: 1.85rem;
            position: absolute;
            top: 50%;
            left: ${!isClicked ? "0.3rem" : "3.4rem"};
            transform: translateY(-50%);
            border-radius: 50%;
          `}
        ></div>
        {!isClicked && (
          <div
            css={css`
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 0.4rem;
              font-size: 1.3rem;
            `}
          >
            OFF
          </div>
        )}
        {isClicked && (
          <div
            css={css`
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0.4rem;
              font-size: 1.3rem;
            `}
          >
            ON
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
