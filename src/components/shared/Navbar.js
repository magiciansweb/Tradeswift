"use client"

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {


    const navItems = <> 


    <Link className="  mr-6 hover:font-bold hover:underline text-white" 
    href="/"> 

    Home
    
     </Link>

    <Link className="text-white mr-6 hover:font-bold hover:underline" 
    href="/faq"> 

    FAQ
    
     </Link>
    <Link className="text-white mr-6 hover:font-bold hover:underline" 
    href="/services"> 

    Services
    
     </Link>
    <Link className="text-white mr-6 hover:font-bold hover:underline" 
    href="/about"> 

    About
    
     </Link>
    <Link className="text-white mr-6 hover:font-bold hover:underline" 
    href="/Blog"> 

    Blog
    
     </Link>

    <Link className="text-white mr-6 hover:font-bold hover:underline" 
    href="/contact"> 

    Contact
    
     </Link>



    
    </>






    return (
        <div className="navbar  fixed z-10  text-white bg-opacity-30 max-w-screen-xl bg-black  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-150 rounded-box bg-black w-52">
              {navItems}
            </ul>
          </div>
          <Image  className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]" src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png" alt="logo" width={50} height={50}/>
          <a className="btn btn-ghost md:text-xl text-md "> TradeSwift </a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>


        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn btn-md btn-success m-1"> Join us </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-40">

    <li className="text-black "> <Link href="/signUp"> SignUp </Link>  </li>
    <li className="text-black"><Link href="/LogIn"> Login </Link>  </li>
  </ul>
</div>


      </div>
    );
};

export default Navbar;