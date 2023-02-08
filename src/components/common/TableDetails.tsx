import { HiOutlineArrowDown } from "react-icons/hi";

const TableDetails = ({ status }: any) => {
  return (
    <tr className="text-xs">
      <td>
        <div className={`bg-${status === "Completed" ? "" : ""}`}>
          <HiOutlineArrowDown color={status === "Completed" ? "" : ""} />
        </div>
      </td>
      <td className="font-medium">REF-1234MT</td>
      <td className="font-semibold">-$0.00</td>
      <td>For Children School Fees</td>
      <td>11:00am 21 oct</td>
      <td className="text-[10px]">
        <div className={`bg-${status === "Completed" ? "" : ""}`}>{status}</div>
      </td>
    </tr>
  );
};

export default TableDetails;
