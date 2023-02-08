import { arrow } from "../../../assets/exports";
import { tableheader } from "../../common/constants";
import TableDetails from "../../common/TableDetails";

const ThirdLayer = () => {
  return (
    <div className="mt-[47px]">
      <div className="flex justify-between">
        <span className="text-2xl font-bold">Transaction Records</span>
        <div className="flex items-center gap-[12px] text-indigo">
          <span className="text-xs font-medium">See All Transactions</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <table className="mt-[30px] w-full text-left">
        <thead>
          <tr>
            {tableheader?.map((header, index) => (
              <th key={index} className="pb-[26px] text-sm font-normal">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableDetails status="Completed" />
          <TableDetails status="Pending" />
          <TableDetails status="Completed" />
          <TableDetails status="Pending" />
        </tbody>
      </table>
    </div>
  );
};

export default ThirdLayer;
