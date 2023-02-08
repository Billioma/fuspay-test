import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface IChildren {
  children: React.ReactNode;
}

const PageLayout = ({ children }: IChildren) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative bg-gray text-black">
      <div className="min-h-screen">
        <Header showSidebar={showSidebar} />
        {showSidebar && <Sidebar />}
        <div
          className={`${
            showSidebar ? "pl-[325px]" : "pl-[25px]"
          } pr-[30px] pb-10 w-full pt-[128px] min-h-screen `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
