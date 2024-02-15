"use client"


import Deposit from "@/components/Transection/Deposit";
import FAQ from "@/components/Transection/FAQ";
import SideDiv from "@/components/Transection/SideDiv";





const deposit = () => {
   
 
    return (
      <div className="flex flex-col gap-8 lg:flex-row">
        <SideDiv></SideDiv>
        <Deposit></Deposit>
        <FAQ></FAQ>
        </div>
    );
};

export default deposit;