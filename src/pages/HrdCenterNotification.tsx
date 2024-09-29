import NavigationBar from "@/components/common/NavigationBar";
import Notification from "@/components/common/Notification";

const HrdCenterNotification = () => {
  return (
    <div>
      <NavigationBar title="인재개발원" element={<Notification />} />
    </div>
  );
};

export default HrdCenterNotification;
