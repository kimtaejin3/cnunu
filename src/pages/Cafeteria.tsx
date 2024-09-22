import MealTimeArea from "@/components/cafeteria/MealTimeArea";
import MenuForCafeteriaOne from "@/components/cafeteria/menu/MenuForCafeteriaOne";
import NavigationBar from "@/components/common/NavigationBar";

const Cafeteria = () => {
  return (
    <>
      <NavigationBar title="학식" />
      <MealTimeArea />
      <div>
        <MenuForCafeteriaOne />
      </div>
    </>
  );
};

export default Cafeteria;
