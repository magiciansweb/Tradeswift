import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <div className="text-white">
      <div className="flex gap-3">
       <Link href={'/deposite'}>
       <button className="bg-[#0FAF59] flex items-center gap-1 text-white px-5 py-2 rounded-sm font-medium">
          <FaPlus />
          Deposit
        </button></Link>
        <button className="bg-[#353A4D] hover:bg-black text-white px-5 py-2 rounded-sm font-medium">
          Withdrawal
        </button>
      </div>
      <div className="flex gap-4 mt-6 flex-col lg:flex-row">
        <div className="flex-1">
            <div className="grid grid-cols-2 gap-3">
                <div className="px-5 py-4 bg-blue-600 rounded-md">
                    <h1 className="text-xl font-semibold">Balance </h1>
                    <h2 className="text-3xl font-bold">$ 1500</h2>
                </div>
                <div className="px-5 py-4 bg-blue-600 rounded-md">
                    <h1 className="text-xl font-semibold">Total Profit </h1>
                    <h2 className="text-3xl font-bold">$ 1000</h2>
                </div>
                <div className="px-5 py-4 bg-blue-600 rounded-md">
                    <h1 className="text-xl font-semibold">Total Withdraw </h1>
                    <h2 className="text-3xl font-bold">$ 500</h2>
                </div>
            </div>
        </div>
        <div className="flex-1">
            
        </div>
      </div>
    </div>
  );
};

export default page;
