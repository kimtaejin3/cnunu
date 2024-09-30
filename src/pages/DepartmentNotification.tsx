import { css } from "@emotion/react";

import NavigationBar from "@/components/common/NavigationBar";
import Notification from "@/components/common/Notification";
import NotificationCard from "@/components/common/NotificationCard";
import Search from "@/components/common/Search";

const DepartmentNotification = () => {
  return (
    <div>
      <NavigationBar title="학과소식" element={<Notification />} />
      <div
        css={css`
          padding: 0 1.6rem;
        `}
      >
        <Search />
        <div>
          <NotificationCard
            category="공지사항"
            title="학과 사무실 에어컨 보수공사로 인한 건물어쩌구"
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentNotification;
