import { calendar, plus, wave } from "../../../assets/exports";

const FirstLayer = () => {
  return (
    <div className="bg-active relative font-lato flex md:flex-row sm:flex-col justify-between text-white py-[35px] px-[25px] rounded-lg">
      <div>
        <span className="flex gap-[6px] items-center">
          <img alt="calendar" src={calendar} />
          <span className="text-sm">Friday 22nd, October 2022</span>
        </span>
        <span className="font-bold text-[32px]">Good Evening</span>
      </div>

      <div className="sm: mt-5 md:mt-0">
        <img
          src={wave}
          alt="background"
          className="absolute right-5 w-[400px] h-[76px]"
        />
        <button className="bg-green relative z-2 flex items-center justify-center gap-[4px] px-5 min-h-[50px] rounded">
          <img alt="add" src={plus} />
          Create New Wallet
        </button>
      </div>
    </div>
  );
};

export default FirstLayer;
