import { useEffect, useState } from "react";
import { avatar, menu, noti } from "../assets/exports";
import { MdMenu } from "react-icons/md";
import SideDrawer from "./SideDrawer";

const Header = ({ showSidebar }: any) => {
  const [scroll, setScroll] = useState(false);
  const [showDrawerMenu, setShowDrawerMenu] = useState(false);
  const toggleSidebar = () => {
    setShowDrawerMenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-blur" : "bg-white"
      } backdrop-blur-md fixed top-0 text-black flex flex-col justify-center lg:pr-20 sm:pr-5 w-full z-[3] h-91`}
    >
      <SideDrawer
        isOpen={showDrawerMenu}
        onClose={() => setShowDrawerMenu(false)}
      />
      {showSidebar ? (
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
      ) : (
        <div className="flex pl-5 justify-between">
          <div>
            <MdMenu size="32px" onClick={toggleSidebar} />
          </div>
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
      )}
    </div>
  );
};

export default Header;
