import { BsCircleFill } from "react-icons/bs";
import { on } from "../../common/constants";

const Ongoing = () => {
  return (
    <div>
      {on?.map((data, i) => (
        <div
          key={i}
          className="flex items-center pb-[10px] font-archivo justify-between text-gray_800 border-b border-gray_700"
        >
          <div>
            <div className="text-[22px] font-bold">$1000</div>
            <div className="">{data}</div>
          </div>
          <BsCircleFill
            size="12px"
            color={data === "Processing" ? "#F55F0A" : "#44CF95"}
          />
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
