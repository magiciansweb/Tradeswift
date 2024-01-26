"use client";

import { AuthContext } from "@/Provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {user,logout} = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
    .then(()=>{
      toast.success("Sign Out sucessfully");
    })
  }
  const navItems = (
    <>
      <Link
        className="  mx-3 font-bold hover:underline text-white"
        href="/"
      >
        Home
      </Link>

      <Link
        className="text-white mx-3 font-bold hover:underline"
        href="/faq"
      >
        FAQ
      </Link>
      <Link
        className="text-white mx-3 font-bold hover:underline"
        href="/services"
      >
        Services
      </Link>
      <Link
        className="text-white mx-3 font-bold hover:underline"
        href="/about"
      >
        About
      </Link>
      <Link
        className="text-white mx-3 font-bold hover:underline"
        href="/blog"
      >
        Blog
      </Link>

      <Link
        className="text-white mx-3 font-bold hover:underline"
        href="/contact"
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className="bg-gray-900 text-white">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-2 mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52"
            >
             {navItems}
            </ul>
          </div>
          <div className="flex items-center">
          <Image  className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]" src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png" alt="logo" width={50} height={50}/>
          <p className="btn btn-ghost md:text-xl text-md "> TradeSwift </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        {user === null ?  <Link href='signin' >
          <button className="bg-[#00D094] text-black font-semibold px-5 py-3 rounded-md">Join Now</button>
        </Link> : <button onClick={handleLogout} className="bg-[#00D094] text-black font-semibold px-5 py-3 rounded-md">Sign Out</button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
