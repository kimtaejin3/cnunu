import { css } from "@emotion/react";

import { COLORS } from "@/constants";

type Props = {
  list: string[];
};

const FoodList = ({ list }: Props) => {
  return (
    <ul
      css={css`
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      `}
    >
      {list.length == 0 && <li css={style.listItem}>운영안함</li>}
      {list.length > 0 &&
        list.map((item) => (
          <li key={item} css={style.listItem}>
            {item}
          </li>
        ))}
    </ul>
  );
};

const style = {
  listItem: css`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    &:before {
      content: " ";
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background-color: ${COLORS.black};
    }
  `,
};

export default FoodList;
