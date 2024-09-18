import { css } from "@emotion/react";

type Props = {
  title: string;
  iconSrc: string;
  iconAlt: string;
};

const CardHeader = ({ title, iconSrc, iconAlt }: Props) => {
  return (
    <div css={CardHeaderCss.container}>
      <h2>{title}</h2>
      <img src={iconSrc} alt={iconAlt} />
    </div>
  );
};

const CardHeaderCss = {
  container: css`
    display: flex;
    justify-content: space-between;
  `,
  title: css`
    font-family: SUIT;
    font-size: 1.8rem;
    font-weight: 700;
  `,
};

export default CardHeader;
