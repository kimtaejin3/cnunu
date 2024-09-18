import { css } from "@emotion/react";

import { COLORS } from "@/constants";

type Props = {
  title: string;
  progress: number;
};

const PercentBar = ({ title, progress }: Props) => {
  return (
    <>
      <div
        css={css`
          font-size: 1.2rem;
          font-weight: 400;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          background: #e0e4ea;
          height: 0.7rem;
          border-radius: 0.2rem;
          margin-top: 0.5rem;
        `}
      >
        <div
          css={css`
            height: 0.7rem;
            border-radius: 0.2rem;
            background: ${COLORS.primary700};
            box-shadow: 1px 1.5px 2.5px 1px #ffffff66 inset;
            box-shadow: -1px -1.5px 4px 1px #a1ecfb66 inset;
            width: ${progress}%;
          `}
        ></div>
      </div>
    </>
  );
};

export default PercentBar;