import { css } from "@emotion/react";

type Props = {
  title: string;
  titleColor: string;
  iconSrc?: string;
  iconAlt?: string;
};

const CardHeader = ({ title, titleColor, iconSrc, iconAlt }: Props) => {
  return (
    <div css={CardHeaderCss().container}>
      <div css={CardHeaderCss(titleColor).title}>{title}</div>
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
    </div>
  );
};

const CardHeaderCss = (titleColor?: string) => ({
  container: css`
    display: flex;
    justify-content: space-between;
  `,
  title: css`
    font-family: SUIT;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    letter-spacing: -0.02em;
    text-align: left;
    color: ${titleColor};
  `,
});

export default CardHeader;
