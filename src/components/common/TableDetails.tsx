import { HiOutlineArrowDown } from "react-icons/hi";

const TableDetails = ({ status }: any) => {
  return (
    <tr className="text-xs">
      <td>
        <div
          className={`w-6 h-6 rounded-full flex flex-col justify-center items-center ${
            status === "Completed" ? "bg-green_200" : "bg-red_200"
          }`}
        >
          <HiOutlineArrowDown
            color={status === "Completed" ? "#009A49" : "#FC6B6B"}
          />
        </div>
      </td>
      <td className="font-medium">REF-1234MT</td>
      <td className="font-semibold text-gray_300">-$0.00</td>
      <td className="text-gray_200">For Children School Fees</td>
      <td className="text-gray_200">11:00am 21 oct</td>
      <td className="text-[10px]">
        <div
          className={` h-[23px] rounded-[3px] flex flex-col justify-center items-center ${
            status === "Completed" ? "bg-green_300" : "bg-brown"
          }`}
        >
          <span
            className={`${
              status === "Completed" ? "text-green_400" : "text-brown_200"
            }`}
          >
            {status}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableDetails;
