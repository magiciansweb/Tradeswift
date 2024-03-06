"use client"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import barnner from '@/assets/banner.png'
import UseAdmin from "@/components/Hooks/UseAdmin";
import Link from "next/link";


const Banner = () => {
    const [userInfo]=UseAdmin();
    return (
       <>
         <div className=" ">
            <div className="container mx-auto  flex items-center justify-between gap-8  flex-col-reverse md:flex-row">
                <div className="space-y-3">
                    <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold">Invest Your Money <br /> With <span className="text-green-600">Higher Return</span></h1>
                    <p className="max-w-lg text-sm md:text-base">Anyone can invest money to different currency to increase their earnings by the help of Bitrader through online.</p>
               {userInfo? <Link href={'/userdashboard'}><button className="bg-green-600 px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                   <span>Get Started</span>
                   
                    <span><FaArrowRight/></span>
                </button></Link>:<Link href={'/signin'}><button className="bg-green-600 px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                   <span>Get Started</span>
                   
                    <span><FaArrowRight/></span>
                </button></Link>}
                </div>
                <div>
                    <Image src={barnner} width={400} height={700} alt="banner" />
                </div>
            </div>
        </div>
        
       </>
    );
};

export default Banner;