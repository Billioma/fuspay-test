import FirstGrid from "./FirstGrid/FirstGrid";
import SecondGrid from "./SecondGrid";

const GridLayer = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-[17px] gap-[30px]">
      <FirstGrid />
      <SecondGrid />
    </div>
  );
};

export default GridLayer;
