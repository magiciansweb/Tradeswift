/**
 * The `easyToUsePage` function returns a React component that displays a page with powerful and
 * easy-to-use features, including a newsfeed, indicators, and a supportive community.
 * @returns The easyToUsePage component is returning a JSX structure that represents a section of a web
 * page. It includes a heading, a paragraph, three feature sections with images and descriptions, and a
 * button.
 */
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import UseAdmin from '../Hooks/UseAdmin';

const Easytouse = () => {
  const [userInfo]=UseAdmin();
  return (
    <div className="bg-[#161A25] min-h-screen pb-4">
      <h1 className="text-green-600 text-5xl font-bold text-center pt-28">
        Powerful and easy-to-use features
      </h1>
      <p className="text-center text-gray-400 text-xl mt-4">
        IQ Option simplifies the complexities of investing through intuitive{" "}
        <br />
        tools, enhancing efficiency and simplicity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-screen-xl px-2 mx-auto">
        <div className="bg-[#22293D] h-[508px] rounded-lg cursor-pointer">
          <p className=" text-lg text-center mt-8">
            Use smart Newsfeed to <br /> make informed decisions
          </p>
          <div className="flex justify-center mx-auto">
            <div className="h-[320px] w-[320px] mt-[100px] rounded-full absolute bg-gray-700"></div>
          </div>
          <Image
            src={"https://i.ibb.co/8sy9zW5/feature-1-desktop-new.png"}
            className="mt-[24px] w-2/3 mx-auto relative z-20"
            alt="use image"
            height={800}
            width={200}
          ></Image>
        </div>
        <div className="bg-[#22293D] h-[508px] rounded-lg cursor-pointer">
          <p className=" text-lg text-center mt-8">
            Trade wisely by using a <br /> variety of Indicators
          </p>
          <div className="flex justify-center mx-auto">
            <div className="h-[320px] w-[320px] mt-[100px] rounded-full absolute bg-gray-700"></div>
          </div>
          <Image
            src={"https://i.ibb.co/mDXtdPM/feature-2-desktop.png"}
            className="mt-[24px] w-2/3 mx-auto relative z-20"
            alt="use image"
            height={800}
            width={200}
          ></Image>
        </div>
        <div className="bg-[#22293D] h-[508px] rounded-lg cursor-pointer">
          <p className=" text-lg text-center mt-8">
            Harness the power of a <br /> supportive community
          </p>
          <div className="flex justify-center mx-auto">
            <div className="h-[320px] w-[320px] mt-[100px] rounded-full absolute bg-gray-700"></div>
          </div>
          <Image
            src={"https://i.ibb.co/DwRP70X/feature-3-desktop.png"}
            className="mt-[24px] w-2/3 mx-auto relative z-20"
            alt="use image"
            height={800}
            width={200}
          ></Image>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto mt-10">
       {userInfo? <Link href={'/userdashboard'}><button className="bg-green-600 px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                   <span>Get Started</span>
                   
                    <span><FaArrowRight/></span>
                </button></Link>:<Link href={'/signin'}><button className="bg-green-600 px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                   <span>Get Started</span>
                   
                    <span><FaArrowRight/></span>
                </button></Link>}
      </div>
    </div>
  );
};

export default Easytouse;