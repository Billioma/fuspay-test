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
    <div className="relative bg-white text-black">
      <div>
        <Header />
        {showSidebar && <Sidebar />}
        <div className="pl-[325px] pr-[30px] w-full pt-[128px] min-h-screen bg-gray">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
