"use client";


import UseAdmins from "@/Hooks/UseAdmins";
import countryList from "react-select-country-list";


const page = () => {
  const [userInfo] = UseAdmins() ;
  const country = countryList()

  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold">User Id : {userInfo?._id}</h3>
      <div className="max-w-md mt-7">
        <div>
          <h5 className="text-sm font-medium mb-1">User Name</h5>
          <input
            type="text"
            name="name"
            defaultValue={userInfo?.name}
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">User Email</h5>
          <input
            type="email"
            readOnly
            name="email"
            defaultValue={userInfo?.email}
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Date of birth</h5>
          <input
            type="date"
            name="birth"
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Country</h5>
          <select className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]" name="country" id="">
            { country.data.map(country=><option key={country.value} value={country.label} >{country.label}</option>)}
          </select>
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Address</h5>
          <input
            type="text"
            name="address"
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <input type="submit" value='Update' className="bg-[#026FD3] text-white w-full py-2 font-medium mt-3 cursor-pointer" />
      </div>
    </div>
   );
};

export default page;
