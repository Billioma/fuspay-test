import React, { useEffect, useState } from "react";
import { avatar, menu, noti } from "../assets/exports";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={
        "bg-white fixed top-0 text-black flex flex-col justify-center pr-20 w-full z-3 h-91"
      }
    >
      <div className="flex justify-end">
        <div className="flex gap-[35px] items-center">
          <img src={noti} alt="notification" className="w-[22.67px]" />
          <div className="flex items-center gap-2">
            <img src={avatar} alt="avatar" className="w-[32px]" />
            <span>Timothy</span>
            <img
              src={menu}
              alt="dropdown"
              className="w-[8px] h-[6px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
