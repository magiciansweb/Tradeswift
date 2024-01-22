import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import barnner from '@/assets/banner.png'
import Marquee from "react-fast-marquee";
import marque1 from '@/assets/marque1.png'
import marque2 from '@/assets/marque2.png'
import marque3 from '@/assets/marque3.png'
import marque4 from '@/assets/marque4.png'
import marque5 from '@/assets/marque5.png'
import marque6 from '@/assets/marque6.png'

const Banner = () => {
    return (
       <>
         <div className="bg-[#111] text-white">
            <div className="container mx-auto px-4 flex items-center justify-center gap-8 py-8 flex-col-reverse md:flex-row">
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
        <div className="bg-[#002A1E] py-5">
           <div className="container mx-auto"> 
           <Marquee loop={false}>
                <Image className="mx-6 w-20 md:w-48" src={marque1} width={200} height={120} alt="marque" />
                <Image className="mx-6 w-20 md:w-48" src={marque2} width={200} height={120} alt="marque" />
                <Image className="mx-6 w-20 md:w-48" src={marque3} width={200} height={120} alt="marque" />
                <Image className="mx-6 w-20 md:w-48" src={marque4} width={200} height={120} alt="marque" />
                <Image className="mx-6 w-20 md:w-48" src={marque5} width={200} height={120} alt="marque" />
                <Image className="mx-6 w-20 md:w-48" src={marque6} width={200} height={120} alt="marque" />
            </Marquee>
           </div>
        </div>
       </>
    );
};

export default Banner;