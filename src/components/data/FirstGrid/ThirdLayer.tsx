import { arrow } from "../../../assets/exports";
import { tableheader } from "../../common/constants";
import TableDetails from "../../common/TableDetails";

const ThirdLayer = () => {
  return (
    <div className="mt-[47px] font-lato">
      <div className="flex justify-between sm:flex-col md:flex-row">
        <span className="text-2xl font-bold ">Transaction Records</span>
        <div className="flex items-center sm:mt-2 md: mt-0 gap-3 text-indigo">
          <span className="text-xs  font-medium font-plus">
            See All Transactions
          </span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="mt-[30px] h-[300px] w-[700px] text-left whitespace-nowrap">
          <thead>
            <tr>
              {tableheader?.map((header, index) => (
                <th key={index} className="text-sm font-normal">
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
    </div>
  );
};

export default ThirdLayer;
