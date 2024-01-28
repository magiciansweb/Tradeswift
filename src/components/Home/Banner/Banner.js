import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import barnner from '@/assets/banner.png'


const Banner = () => {
    return (
       <>
         <div className=" text-white">
            <div className="container mx-auto  flex items-center justify-between gap-8  flex-col-reverse md:flex-row">
                <div className="space-y-3">
                    <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold">Invest Your Money <br /> With <span className="text-[#00D094]">Higher Return</span></h1>
                    <p className="max-w-lg text-sm md:text-base">Anyone can invest money to different currency to increase their earnings by the help of Bitrader through online.</p>
                <button className="bg-[#00d094] px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                    <span>Get Started</span>
                    <span><FaArrowRight/></span>
                </button>
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