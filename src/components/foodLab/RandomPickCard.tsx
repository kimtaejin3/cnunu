import { css } from "@emotion/react";

import { COLORS } from "@/constants";

type Props = {
  type: "식당" | "카페";
  menuType: string;
  name: string;
  signatureMenu: string;
  price: string;
};

const RandomPickCard = ({ ...props }: Props) => {
  const { type, menuType, name, signatureMenu, price } = props;

  return (
    <div>
      <div css={style.container}>
        <div
          css={css`
            color: ${COLORS.grayscale600};
            font-family: SUIT-SemiBold;
            font-size: 1.6rem;
            border-bottom: 1px solid ${COLORS.grayscale300};
            padding-bottom: 1rem;
          `}
        >
          {type}
        </div>
        <div
          css={css`
            max-width: 9.6rem;
            height: 9.6rem;
            background-color: ${COLORS.grayscale300};
            margin: 1.5rem auto 1rem;
          `}
        ></div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <div
            css={css`
              font-size: 1.2rem;
              font-family: SUIT-SemiBold;
              color: ${COLORS.grayscale600};
            `}
          >
            {menuType}
          </div>
          <div
            css={css`
              font-size: 2rem;
              font-family: SUIT-SemiBold;
            `}
          >
            {name}
          </div>
          <div
            css={css`
              font-size: 1.2rem;
              color: ${COLORS.grayscale600};
            `}
          >
            {signatureMenu}
          </div>
          <div
            css={css`
              font-size: 1.2rem;
              font-family: SUIT-Regular;
            `}
          >
            평균 {price}
          </div>
          <a
            css={css`
              font-family: SUIT-Regular;
              font-size: 1.2rem;
              text-decoration: underline;
            `}
            href="/"
          >
            자세히 보기 {">"}
          </a>
        </div>
      </div>

      <button
        css={css`
          color: ${COLORS.primary500};
          width: 100%;
          border: 1px solid;
          border-radius: 0.8rem;
          padding: 1rem 0;
          font-family: SUIT-SemiBold;
          font-size: 1.4rem;
          margin-top: 1rem;
        `}
      >
        다시 검색
      </button>
    </div>
  );
};

const style = {
  container: css`
    background: ${COLORS.grayscale50};
    text-align: center;
    padding: 1rem 0;
    border-radius: 0.8rem;
  `,
  type: css`
    font-size: 1.6rem;
    font-family: SUIT-Bold;
    font-weight: 700;
    text-align: center;
    color: ${COLORS.grayscale600};
  `,
};

export default RandomPickCard;
