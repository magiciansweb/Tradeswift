
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (


 <div className=''>

     <div
      style={{
        backgroundImage: 'url(https://i.ibb.co/z6mB4B4/stephen-dawson-qwt-Ce-J5c-LYs-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height :'100vh',

      }} 
      
      className="flex justify-center items-center h-[100vh] mx-auto  ">
        <div className="absolute inset-0 bg-black opacity-70"></div>


      

        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

   <Image src="https://i.ibb.co/XkJ1S0Q/75ez.gif" alt="banner" width={300} height={300}/>

    <div>
      <h1 className="text-5xl font-bold text-white">Empower Your Business Journey with TradeSwift</h1>

      <p className="py-6 text-lg font-medium text-white">Welcome to TradeSwift, where businesses converge for seamless trade. Our platform is designed to simplify and enhance your trading experience, connecting you with global markets and fostering growth</p>
     <Link href="signUp">  <button className="btn btn-primary">Get Started</button> </Link>
    </div>
  </div>
</div>


          
          



     










    </div>
 </div>
  );
};

export default Home;
