import { useState } from "react";

const useBottomSheet = () => {
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return {
    isShow,
    handleClose,
    handleOpen,
  };
};

export default useBottomSheet;
