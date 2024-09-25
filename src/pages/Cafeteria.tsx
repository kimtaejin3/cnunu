import MealTimeArea from "@/components/cafeteria/MealTimeArea";
import MenuForCafeteriaNeedPopup from "@/components/cafeteria/menu/MenuForCafeteriaNeedPopup";
import MenuForCafeteria from "@/components/cafeteria/menu/MenuForCafetria";
import NavigationBar from "@/components/common/NavigationBar";

const Cafeteria = () => {
  return (
    <>
      <NavigationBar title="학식" />
      <MealTimeArea />
      <div>
        <MenuForCafeteriaNeedPopup />
        <MenuForCafeteria cafeteriaName="2학" />
      </div>
    </>
  );
};

export default Cafeteria;
