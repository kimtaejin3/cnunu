import { css } from "@emotion/react";

import MealTimeArea from "@/components/cafeteria/MealTimeArea";
import MenuForCafeteriaNeedPopup from "@/components/cafeteria/menu/MenuForCafeteriaNeedPopup";
import MenuForCafeteria from "@/components/cafeteria/menu/MenuForCafetria";
import NavigationBar from "@/components/common/NavigationBar";

const Cafeteria = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <NavigationBar title="학식" />
      <MealTimeArea />
      <div
        css={css`
          display: flex;
          gap: 1rem;
          padding: 1rem 1rem 10rem;
        `}
      >
        <div
          css={css`
            flex-basis: 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <MenuForCafeteriaNeedPopup />
          <MenuForCafeteria
            cafeteriaName="3학"
            foodList={{
              forWorkers: [
                "닭볶음탕백반",
                "맑은 미역국",
                "타코야끼",
                "식혜",
                "배추김치",
              ],
              forStudents: [
                "닭볶음탕백반",
                "맑은 미역국",
                "타코야끼",
                "식혜",
                "배추김치",
              ],
            }}
          />
        </div>
        <div
          css={css`
            flex-basis: 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <MenuForCafeteria
            cafeteriaName="2학"
            foodList={{
              forWorkers: [],
              forStudents: ["삼계탕죽", "북어묵조림", "깍두기"],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
