import { css } from "@emotion/react";

import { useEffect } from "react";

import { getActivityNotice } from "@/api";
import ListCategory from "@/components/common/ListCategory";
import NavigationBar from "@/components/common/NavigationBar";
import Notification from "@/components/common/Notification";
import NotificationCard from "@/components/common/NotificationCard";
import Search from "@/components/common/Search";
import { COLORS } from "@/constants";

const HrdCenterNotification = () => {
  const handleLoadActivityNotice = async () => {
    const { data } = await getActivityNotice();
    console.log("hrd data:", data);
  };

  useEffect(() => {
    handleLoadActivityNotice();
  }, []);

  return (
    <div>
      <NavigationBar
        sx={{ boxShadow: "initial" }}
        title="인재개발원"
        element={<Notification />}
      />
      <div
        css={css`
          margin-top: 2rem;
        `}
      ></div>
      <ListCategory
        datas={["진로/취업", "대외활동", "현장실습"]}
        selectedData="대외활동"
      />
      <ul
        css={css`
          background: ${COLORS.grayscale50};
          display: flex;
          padding: 1.3rem 2rem;
          gap: 2rem;

          @media (max-width: 330px) {
            gap: 1rem;
          }
        `}
      >
        <li css={style(false).subListItem}>
          <button>전체</button>
        </li>
        <li css={style(true).subListItem}>
          <button>공지사항</button>
        </li>
        <li css={style(false).subListItem}>
          <button>프로그램</button>
        </li>
        <li css={style(false).subListItem}>
          <button>기타</button>
        </li>
      </ul>

      <div
        css={css`
          padding: 0 1.6rem;
        `}
      >
        <Search />

        <div
          css={css`
            padding-top: 1rem;
          `}
        >
          <NotificationCard
            category="공지사항"
            title="학과 사무실 에어컨 보수공사로 인한 건물어쩌구"
          />
        </div>
      </div>
    </div>
  );
};

const style = (isSelected: boolean) => ({
  subListItem: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radus: 2.2rem;
    font-size: 1.3rem;
    font-family: SUIT-SemiBold;
    color: ${isSelected ? COLORS.primary750 : COLORS.grayscale600};
    background: ${isSelected ? COLORS.primary100 : "initial"};
    padding: 0.7rem 1.2rem;
    border-radius: 2.2rem;

    button {
      @media (max-width: 330px) {
        font-size: 1.2rem;
      }
    }
  `,
});

export default HrdCenterNotification;
