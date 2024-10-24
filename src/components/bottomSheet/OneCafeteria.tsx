import { css } from "@emotion/react";

import { COLORS } from "@/constants";

const OneCafeteria = () => {
  return (
    <div
      css={css`
        display: flex;
        // background: #e0e4ea;
      `}
    >
      <div
        css={css`
          width: 100px;
          flex-shrink: 0;
        `}
      >
        <ul
          css={css`
            li {
              padding: 1.5em 1em;
              background: ${COLORS.grayscale100};
              color: ${COLORS.grayscale600};
              font-size: 1.4rem;
            }

            li.selected {
              background: ${COLORS.white};
              color: ${COLORS.primary750};
              font-family: SUIT-SemiBold;
            }
          `}
        >
          <li className="selected">라면 & 간식</li>
          <li>양식</li>
          <li>스낵</li>
          <li>한식</li>
          <li>일식</li>
          <li>중식</li>
        </ul>
      </div>
      <div
        css={css`
          flex-grow: 1;
          background: ${COLORS.white};
          height: 100vh;
          padding: 10px 20px;
        `}
      >
        <div>
          <h2
            css={css`
              border-bottom: 1px solid #e0e4ea;
              padding-bottom: 8px;
              color: ${COLORS.grayscale600};
            `}
          >
            운영시간
          </h2>
        </div>
        <div>
          <h2
            css={css`
              border-bottom: 1px solid #e0e4ea;
              padding-bottom: 8px;
              margin-bottom: 10px;
              margin-top: 40px;
              color: ${COLORS.grayscale600};
            `}
          >
            메뉴
          </h2>

          <ul
            css={css`
              display: flex;
              flex-direction: column;
              gap: 15px;
              font-size: 14px;
            `}
          >
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                일반라면
              </span>
              <span>2,500원</span>
            </li>
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                떡만두라면
              </span>
              <span>3,000원</span>
            </li>
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                해장라면
              </span>
              <span>3,000원</span>
            </li>
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                치즈라면
              </span>
              <span>3,000원</span>
            </li>
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                부대라면
              </span>
              <span>4,000원</span>
            </li>
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                김밥
              </span>
              <span>3,000원</span>
            </li>
            <li
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <span
                css={css`
                  font-family: SUIT-SemiBold;
                `}
              >
                공기밥
              </span>
              <span>500원</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OneCafeteria;
