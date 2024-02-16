"use client"
import UseAdmin from "@/components/Hooks/UseAdmin";
import Link from "next/link";



import { FaHome, FaTradeFederation } from "react-icons/fa";
import { FaAccusoft,  FaPersonRifle,  FaPlaystation,  FaUsers, FaVoicemail } from "react-icons/fa6";



const layout = ({children}) => {
    const [userInfo] = UseAdmin()
   
    return (
  <div className="flex flex-col lg:flex-row">
            <div className=" lg:w-56 w-full lg:min-h-screen  bg-[#353A4D]">
                <ul className="menu p-4">
                  {
                    userInfo.role === 'admin' ? <>
                    <li><Link href={'/userdashboard/profile'}><FaPersonRifle></FaPersonRifle> Profile</Link></li>
                    
                      <li ><Link href={'/userdashboard'} ><FaHome></FaHome> Admin Home</Link></li>
                      <li><Link href={'/userdashboard/alltrade'}><FaTradeFederation></FaTradeFederation> All trade</Link></li>
                    <div className="divider"></div>
                    
                    <li ><Link href={'/userdashboard/account'} > <FaAccusoft></FaAccusoft> Account Update</Link></li>
                    <li ><Link href={'/userdashboard/deposite'} > <FaVoicemail></FaVoicemail> Transection</Link></li>
                    <li><Link href={'/userdashboard/UsersCollect'}><FaUsers></FaUsers>  Allusers</Link></li>
                    <li ><Link href={'/userdashboard/tournaments'} > <FaPlaystation></FaPlaystation> Tournaments</Link></li>
                    <li><Link href={'/'}><FaHome></FaHome> Home</Link></li>
                    </>:
                    <>
                    <li ><Link href={'/'} ><FaHome></FaHome>  Home</Link> </li> 
                    <li ><Link href={'/userdashboard/account'} > <FaAccusoft></FaAccusoft>Update Account </Link></li>
                    <li ><Link href={'/userdashboard/deposite'} > <FaVoicemail></FaVoicemail> Transection</Link></li>
                    <li ><Link href={'/userdashboard/tournaments'} > <FaPlaystation></FaPlaystation> Tournaments</Link></li>
                    
                    <li ><Link href={'/userdashboard/profile'} > <FaPersonRifle></FaPersonRifle> Profile</Link></li>
                    
                    </>
                  
}
                  
                </ul>
            </div>
            <div className="flex-1 p-8">
            {children}
            </div>
 </div>
    );
};

export default layout;