import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";

const FirstGrid = () => {
  return (
    <div className="bg-white rounded-sm py-[22px] px-[31px] col-span-2">
      <FirstLayer />
      <SecondLayer />
      <ThirdLayer />
    </div>
  );
};

export default FirstGrid;
