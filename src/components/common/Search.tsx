import { css } from "@emotion/react";

import SEARCH from "@/assets/icons/search.svg";
import { COLORS } from "@/constants";

const Search = () => {
  return (
    <div
      css={css`
        padding: 1.2rem; 1.6rem;
    `}
    >
      <div
        css={css`
          background: ${COLORS.grayscale50};
          padding: 1.2rem 0.5rem;
          border-radius: 0.8rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          border: 0.1rem solid ${COLORS.grayscale450};
        `}
      >
        <img src={SEARCH} alt="search" />
        <input
          css={css`
            color: ${COLORS.grayscale450};
            border: none;
            background: inherit;
            font-size: 1.7rem;

            &::placeholder {
              color: ${COLORS.grayscale450};
            }
          `}
          type="text"
          placeholder="검색어를 입력하세요"
        />
      </div>
    </div>
  );
};

export default Search;
