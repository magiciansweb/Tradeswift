"use client"
import VideoThumbnail from './VideoThumbnail';


// import ReactPlayer from 'react-player'
const Foundation = () => {


    return (


     





 <div className="pt-10  pb-10 text-center ">
  <h2 className=" font-bold text-4xl text-green-600 mb-4">Build Your Investing <span className='font-extrabold'> Foundation </span> </h2>
  <p className=" text-lg mb-6">
    We all have to start somewhere. Let us help you enhance your trading knowledge throughout your trading journey.
    <br />With our video tutorials section, you will be ready to start in no time.
  </p>


 
      
     
      


  <div className="flex flex-col md:flex-row items-center justify-around gap-5">

      

<VideoThumbnail  thumbnailUrl="https://i.ibb.co/1d2MDJG/collage-finance-banner-concept.jpg" videoUrl="https://youtu.be/P7qikc4439g?si=xHrAcCrBclofZQ5e" title="How to use technical Indicators ?" vidTitle="Technical Analysis"   />
    

    
     

<VideoThumbnail  thumbnailUrl="https://i.ibb.co/BZXS9z6/man-looking-stock-market-news-computer.jpg" videoUrl="https://youtu.be/vmfkSbvG3fs?si=Dmf2GjwbosD3KKuk" title="How to use News in Trading ?" vidTitle="Fundamental Analysis"/>
  
  </div>




</div> 

    









    );
};

export default Foundation;
