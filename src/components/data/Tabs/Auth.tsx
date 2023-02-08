const Auth = () => {
  return (
    <div>
      <div className="bg-gray_900 px-[20px] text-gray_800 font-archivo pt-[10px] pb-[20px] rounded-[15px]">
        <div className="flex justify-between items-center">
          <span>
            <div className="text-gray_200  font-medium">Amount</div>
            <div className="text-[22px] font-bold">$1000</div>
          </span>

          <span>
            <div className="text-red font-bold text-xl">5.03</div>
            <div className="text-gray_200 text-sm font-medium">minutes</div>
          </span>
        </div>

        <div className="flex mt-[15px] items-center justify-between">
          <span>
            <div className="text-gray_200 font-medium">Beneficiary</div>
            <div className="text-[22px] font-bold">0114512081</div>
            <div className="">Ayodeji Avis Charles</div>
          </span>

          <span>
            <div className=" text-lg font-medium">GT Bank</div>
          </span>
        </div>
      </div>
      <span className="flex justify-between mt-[20px]">
        <button className="bg-active text-white py-3 w-full rounded-full">
          Approve
        </button>
        <button className="w-full">Decline</button>
      </span>
    </div>
  );
};

export default Auth;
