import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { logout, sidelogo } from "../assets/exports";
import { data, activeStyle } from "../components/common/constants";

const SideDrawer = ({ isOpen, onClose }: any) => {
  return (
    <>
      {isOpen && (
        <motion.div
          whileInView={{ x: [-300, 0], y: [200, 0] }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="bg-white flex flex-col pb-10  text-black absolute shadow-2xl top-0 w-2/3 min-h-screen">
            <div className="flex py-9 px-4 justify-between">
              <img
                src={sidelogo}
                alt="logo"
                className="w-[148.43px] h-[36px] ml-[16px]"
              />
              <FaTimes size="20px" color="#000" onClick={onClose} />
            </div>

            <div className="flex-1 mt-5">
              {data?.map((item) => (
                <div
                  key={item.path}
                  className={`hover:bg-active ${
                    item.path === "/" ? "hover:mx-0" : "hover:mx-[40px]"
                  }  items-center flex my-[6px] rounded-2xl`}
                >
                  {item.path === "/" && (
                    <span className="bg-active w-[14px] h-[58px] rounded-r-[16px]" />
                  )}
                  <div className="mx-[40px] w-full hover-active">
                    <NavLink
                      to={item.path}
                      style={({ isActive }) =>
                        isActive
                          ? {
                              ...activeStyle,
                              color: "#fff",
                              fontWeight: "700",
                            }
                          : {
                              ...activeStyle,
                              backgroundColor: "",
                            }
                      }
                    >
                      <img src={item.icon} className="w-[19px]" alt="icon" />
                      {item.name}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            <div className="cursor-pointer mb-10 font-bold flex gap-[16px] items-center text-red">
              <img src={logout} alt="logout" className="ml-[26px]" />
              Logout
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SideDrawer;
