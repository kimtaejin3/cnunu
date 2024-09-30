import { css } from "@emotion/react";

import { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

import prevArrow from "@/assets/icons/prev_arrow.svg";
import { COLORS } from "@/constants";

type Props = {
  sx?: CSSProperties;
  title: string;
  element?: ReactNode;
};

const NavigationBar = ({ sx = {}, title, element = null }: Props) => {
  return (
    <div style={sx} css={style.contaier}>
      <Link
        css={css`
          flex-basis: 0;
          flex-grow: 1;
        `}
        to="/"
      >
        <img src={prevArrow} alt="prev_arrow" />
      </Link>
      <div css={style.title}>{title}</div>
      <div
        css={css`
          flex-basis: 0;
          flex-grow: 1;
          text-align: right;
        `}
      >
        {element}
      </div>
    </div>
  );
};

const style = {
  contaier: css`
    background-color: ${COLORS.white};
    min-height: 7svh;
    box-shadow: 0px 2px 4px 0px #00000026;
    display: flex;
    align-items: center;
    padding: 0.5rem 2rem 0.5rem;
    position: relative;
    z-index: 1000;
  `,

  title: css`
    font-family: SBAggroM;
    // font-weight: 400;
    font-size: 2.6vh;
    flex-grow: 1;
    text-align: center;
    margin-bottom: -0.4rem;
  `,
};

export default NavigationBar;
