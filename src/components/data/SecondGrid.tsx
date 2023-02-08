import { useState } from "react";
import { piggy } from "../../assets/exports";
import { RiArrowRightSLine } from "react-icons/ri";
import { tabs } from "../common/constants";
import Ongoing from "./Tabs/Ongoing";
import Auth from "./Tabs/Auth";

const SecondGrid = () => {
  const [tab, setTab] = useState("On-going Tx");
  return (
    <div className="bg-white rounded-sm lg:col-span-1 sm:col-span-2 py-[29px] px-[34px]">
      <span className="text-2xl font-lato font-bold">Savings</span>

      <div className="font-lato border mt-[16px] border-gray_400 rounded-[9px] py-[16px] px-[20px]">
        <div className="flex items-center gap-2.5">
          <span className="bg-gradient-to-b flex flex-col justify-center items-center from-gold_100 to-gold_200 rounded-full w-[60px] h-[60px]">
            <img src={piggy} alt="coin" className="w-[20px]" />
          </span>
          <span className="text-sm font-semibold">Gold Savings</span>
        </div>
        <div className="flex mt-[18px] gap-[17px] items-center">
          <span className="text-xl font-bold">567.8744</span>
          <span className="text-gray_500 text-sm">$135.25</span>
        </div>
        <span className="flex mt-[23px] justify-center items-center">
          <button className="rounded-[5px] text-white sm:px-10 sm:py-7 lg:py-0 lg:px-3 h-[45px] bg-green_500 flex items-center justify-center">
            View Savings
            <span>
              <RiArrowRightSLine />
            </span>
          </button>
        </span>
      </div>

      <div className="mt-[47px] font-lato">
        <span className="text-2xl font-bold">Real-time Assistant</span>

        <div className="flex gap-[43px]">
          {tabs?.map((data, i) => (
            <span
              key={i}
              onClick={() => setTab(data)}
              className={`${
                tab === data
                  ? "text-active underline font-bold"
                  : "text-gray_600"
              } hover:text-active hover:underline " underline-offset-8 cursor-pointer text-base `}
            >
              {data}
            </span>
          ))}
        </div>

        <div className="mt-[31px]">
          {tab === "On-going Tx" && <Ongoing />}
          {tab === "Authorize Tx" && <Auth />}
        </div>
      </div>
    </div>
  );
};

export default SecondGrid;
