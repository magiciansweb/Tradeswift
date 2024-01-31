"use client"

import useAdmin from "@/Hooks/useAdmin";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  const [userInfo] = useAdmin()
  const pathName = usePathname()

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:hidden bg-[#0b1325] px-3 flex justify-between items-center py-4">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="px-2 cursor-pointer rounded-sm py-1 text-xl bg-white text-black drawer-button lg:hidden"
        >
          <IoMenu/>
        </label>
        <div className="flex gap-1 items-center">
          <Image  className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png" alt="logo" width={50} height={50}/>
          <p className="md:text-xl text-md text-white font-medium text-xl"> TradeSwift </p>
          </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {
          userInfo.role === 'admin' && <ul className="menu  bg-[#0b1325] py-4 px-2 w-64 min-h-full text-white">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
        }
       {
        userInfo.role === 'user' && <ul className="menu space-y-1 bg-[#0b1325] py-4 px-2 w-64 min-h-full text-white">
        <Link href="/userdashboard" className={pathName.endsWith("userdashboard") ? "px-3 bg-slate-700 py-2" : "py-2 px-3 hover:bg-slate-700"}>
          Dashboard
        </Link>
        <Link href="/userdashboard/account" className={pathName.endsWith("userdashboard/account") ? "px-3 bg-slate-700 py-2" : "py-2 px-3 hover:bg-slate-700"}>
          Account
        </Link>
      </ul>
       }
      </div>
    </div>
  );
};

export default Sidebar;
