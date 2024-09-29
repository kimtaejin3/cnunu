import NavigationBar from "@/components/common/NavigationBar";
import Notification from "@/components/common/Notification";

const DepartmentNotification = () => {
  return (
    <div>
      <NavigationBar title="학과소식" element={<Notification />} />
    </div>
  );
};

export default DepartmentNotification;
