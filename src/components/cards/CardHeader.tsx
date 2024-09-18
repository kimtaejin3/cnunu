import { css } from "@emotion/react";

type Props = {
  title: string;
  iconSrc?: string;
  iconAlt?: string;
};

const CardHeader = ({ title, iconSrc, iconAlt }: Props) => {
  return (
    <div css={CardHeaderCss().container}>
      <div css={CardHeaderCss().title}>{title}</div>
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
    </div>
  );
};

const CardHeaderCss = () => ({
  container: css`
    display: flex;
    justify-content: space-between;
  `,
  title: css`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.7rem;
    letter-spacing: -0.02em;
    text-align: left;
  `,
});

export default CardHeader;
