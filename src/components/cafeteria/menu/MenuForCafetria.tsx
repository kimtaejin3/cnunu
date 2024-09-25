import { css } from "@emotion/react";

import FoodList from "./FoodList";
import MenuHeader from "./MenuHeader";

import MenuType from "./MenuType";

import { COLORS } from "@/constants";

type Props = {
  cafeteriaName: string;
  foodList: {
    forWorkers: string[];
    forStudents: string[];
  };
};

const MenuForCafeteria = ({ cafeteriaName, foodList }: Props) => {
  return (
    <div
      css={css`
        border-radius: 0.8rem;
        overflow: hidden;
      `}
    >
      <MenuHeader cafeteriaName={cafeteriaName} />
      <div
        css={css`
          padding: 1.2rem;
          background-color: ${COLORS.white};
        `}
      >
        <div>
          <MenuType typeName="교직원" price="6,000원" />
          <FoodList list={foodList.forWorkers} />
        </div>
        <div
          css={css`
            border: 1px solid ${COLORS.grayscale100};
            margin: 1rem 0;
          `}
        ></div>
        <div>
          <MenuType typeName="학생" price="4,500원" />
          <FoodList list={foodList.forStudents} />
        </div>
      </div>
    </div>
  );
};

export default MenuForCafeteria;
