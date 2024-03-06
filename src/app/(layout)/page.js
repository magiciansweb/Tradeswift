import Foundation from "@/components/Foundation/Foundation";
import Bannerbottom from "@/components/Bannerbottom";
import Easytouse from "@/components/Easytouse/page";
import Footertop from "@/components/Footertop";

import Getstarted from "@/components/Getstarted";
import Banner from "@/components/Home/Banner/Banner";
import Whyinvest from "@/components/Whyinvest";

import React from "react";
import Clients from "@/components/Clients";



const HomePage = () => {
  return <div>
    <Banner/>
    <Bannerbottom></Bannerbottom>
    <Whyinvest></Whyinvest>
    <Foundation></Foundation>
   <Clients></Clients>
   <Getstarted></Getstarted>
   <Easytouse></Easytouse>

   
   
    <Footertop></Footertop>
  </div>;
};

export default HomePage;
