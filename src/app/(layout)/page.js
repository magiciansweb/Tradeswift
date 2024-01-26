import Bannerbottom from "@/components/Bannerbottom";
import Footertop from "@/components/Footertop";
import Getstarted from "@/components/Getstarted";
import Banner from "@/components/Home/Banner/Banner";
import Whyinvest from "@/components/Whyinvest";
import Clients from "@/components/clients";
import React from "react";


const HomePage = () => {
  return <div>
    <Banner/>
    <Bannerbottom></Bannerbottom>
    <Whyinvest></Whyinvest>
   <Clients></Clients>
   <Getstarted></Getstarted>
    <Footertop></Footertop>
  </div>;
};

export default HomePage;
