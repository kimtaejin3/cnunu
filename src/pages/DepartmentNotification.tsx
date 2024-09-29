import NavigationBar from "@/components/common/NavigationBar";
import Notification from "@/components/common/Notification";
import Search from "@/components/common/Search";

const DepartmentNotification = () => {
  return (
    <div>
      <NavigationBar title="학과소식" element={<Notification />} />
      <Search />
    </div>
  );
};

export default DepartmentNotification;
