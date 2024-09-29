import { css } from "@emotion/react";

import { COLORS } from "@/constants";

const ListCategory = ({
  datas,
  selectedData,
}: {
  datas: string[];
  selectedData: string;
}) => {
  return (
    <ul
      css={css`
        display: flex;
      `}
    >
      {datas.map((data) => (
        <li key={data} css={listItemStyle(data == selectedData)}>
          <button>{data}</button>
        </li>
      ))}
    </ul>
  );
};

const listItemStyle = (isActive: boolean) => css`
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
  border-bottom: ${isActive
    ? `2px solid ${COLORS.primary800}`
    : `2px solid ${COLORS.grayscale300}`};
  padding-bottom: 1rem;
  button {
    font-family: SUIT;
    color: ${isActive ? COLORS.black : "rgba(0, 0, 0, 0.5)"};
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
`;

export default ListCategory;
