import { css } from "@emotion/react";

import { Link } from "react-router-dom";

import prevArrow from "@/assets/icons/prev_arrow.svg";
import { COLORS } from "@/constants";

type Props = {
  title: string;
};

const NavigationBar = ({ title }: Props) => {
  return (
    <div css={style.contaier}>
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
        `}
      ></div>
    </div>
  );
};

const style = {
  contaier: css`
    background-color: ${COLORS.white};
    height: 8svh;
    box-shadow: 0px 2px 4px 0px #00000026;
    display: flex;
    align-items: center;
    padding: 0 2rem;
  `,

  title: css`
    font-family: SBAggroB;
    font-weight: 400;
    font-size: 2.7vh;
    flex-grow: 1;
    text-align: center;
  `,
};

export default NavigationBar;
