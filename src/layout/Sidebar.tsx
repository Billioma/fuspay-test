import { NavLink } from "react-router-dom";
import { logout, sidelogo } from "../assets/exports";
import { data } from "../components/common/constants";

const Sidebar = () => {
  const activeStyle = {
    backgroundColor: "#293B96",
    alignItems: "center",
    display: "flex",
    color: "#B8BED9",
    fontSize: "16px",
    // fontFamily: "Lato",
    lineHeight: "20px",
    padding: "33px 20px",
    height: "45px",
    gap: "8px",
    borderRadius: "16px",
  };
  return (
    <div className="flex font-lato flex-col justify-between z-5 fixed min-h-screen w-288 bg-white">
      <div className="mb-[77px]">
        <img
          src={sidelogo}
          alt="logo"
          className="w-[148.43px] h-[36px] ml-[56px] mt-[37px]"
        />
      </div>
      <div className="pt-2 relative flex-1">
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
                    ? { ...activeStyle, color: "#fff", fontWeight: "700" }
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
      <div className="mb-32 cursor-pointer font-bold flex gap-[16px] items-center text-red">
        <img src={logout} alt="logout" className="ml-[56px]" />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
