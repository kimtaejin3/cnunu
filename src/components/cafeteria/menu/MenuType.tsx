import { css } from "@emotion/react";

import { COLORS } from "@/constants";

type Props = {
  typeName: string;
  price: string;
};

const MenuType = ({ typeName, price }: Props) => {
  return (
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
        {typeName}
      </div>
      <div
        css={css`
          font-size: 1.2rem;
        `}
      >
        {price}
      </div>
    </div>
  );
};

export default MenuType;
