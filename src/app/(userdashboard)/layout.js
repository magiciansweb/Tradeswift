"use client";
import UseAdmin from "@/components/Hooks/UseAdmin";
import Link from "next/link";

import { FaHome, FaTradeFederation } from "react-icons/fa";
import { FcNeutralTrading } from "react-icons/fc";
import {
  FaAccusoft,
  FaPlaystation,
  FaUsers,
  FaVoicemail,
} from "react-icons/fa6";

const layout = ({ children }) => {
  const [userInfo] = UseAdmin();
  console.log(userInfo);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" lg:w-56 w-full lg:min-h-screen  bg-[#353A4D]">
        <ul className="menu p-4">
          {userInfo.role === "admin" ? (
            <>
              <li>
                <Link href={"/"}>
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/profile"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Profile
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard"}>
                  <FaHome></FaHome> Admin Home
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/alltrade"}>
                  <FaTradeFederation></FaTradeFederation> All trade
                </Link>
              </li>
              <div className="divider"></div>

              <li>
                <Link href={"/userdashboard/account"}>
                  {" "}
                  <FaAccusoft></FaAccusoft> Account Update
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/deposite"}>
                  {" "}
                  <FaVoicemail></FaVoicemail> Transection
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/UsersCollect"}>
                  <FaUsers></FaUsers> Allusers
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/SocialTrading"}>
                  {" "}
                  <FcNeutralTrading /> Social Trading
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/tournaments"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Tournaments
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/alltransaction"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> All Transaction
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/paymenthistory"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Historty
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/"}>
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard"}>
                  <FaHome></FaHome> User Home
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/account"}>
                  {" "}
                  <FaAccusoft></FaAccusoft>Update Account{" "}
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/deposite"}>
                  {" "}
                  <FaVoicemail></FaVoicemail> Transection by mobile banking or
                  card
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/SocialTrading"}>
                  {" "}
                  <FcNeutralTrading /> Social Trading
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/tournaments"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Tournaments
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/paymenthistory"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Historty
                </Link>
              </li>

              <li>
                <Link href={"/userdashboard/profile"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Profile
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default layout;