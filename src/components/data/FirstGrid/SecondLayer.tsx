import { add, naira, t } from "../../../assets/exports";
import { wallets } from "../../common/constants";

const SecondLayer = () => {
  return (
    <div className="mt-[46px]">
      <div className="flex justify-between font-bold font-lato">
        <span className="text-2xl">Wallets</span>
        <span className="flex items-center gap-[8px] text-green">
          <img
            alt="add"
            src={add}
            className="border-2 rounded-full p-1 w-[20px]"
          />
          <span className="text-[22px]">Fund wallet</span>
        </span>
      </div>
      <div className="overflow-x-auto gap-[16px] mt-[18px] flex">
        {wallets?.map((data, i) => (
          <div
            key={i + 1}
            style={{ backgroundColor: data?.color }}
            className={`min-w-[269px] h-[247px] font-inter shadow-lg rounded-[20px] py-[23px] px-[21px]`}
          >
            <div className="flex gap-[15px]">
              <img alt="T" src={t} className="w-[31px]" />
              <div className="flex gap-[7px] items-center">
                <div className="text-base font-semibold">$548</div>
                <div className="text-xs">USDT</div>
              </div>
            </div>

            <div className="mt-[30px] pt-[21px] border-dashed border-t">
              <div className="text-sm">Balance</div>
              <div className="mt-[7px] text-purple text-xl items-center gap-[7px] font-semibold flex">
                {data?.country === "USA" ? (
                  <span>$</span>
                ) : (
                  <img alt="naira" src={naira} />
                )}
                5,000,048
              </div>
            </div>

            <div className="flex mt-[40px] gap-[5px]">
              <img alt="T" src={data?.flag} className="min-w-[8px] h-[16px]" />
              <div>
                <div className="text-xs font-lato">{data?.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondLayer;
