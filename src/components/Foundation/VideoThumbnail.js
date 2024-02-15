
import React, { useState } from 'react';
import VideoModal from './VideoModal';
import Image from 'next/image';
import './VideoThumbnail.css'
import { IoMdPlayCircle } from "react-icons/io";

const VideoThumbnail = ({ thumbnailUrl , videoUrl , title , vidTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
   

    <div className="video-thumbnail">
      <div className="thumbnail-container" onClick={openModal}>
        <Image src={thumbnailUrl} width={500} height={500} alt="Thumbnail" />
        <div className="overlay">
          <span className="play-icon"> <IoMdPlayCircle />
</span>
          <p className="video-title text-white absolute bottom-0 left-3 font-bold " > {title} </p>
          <p className='text-black font-bold absolute top-4 left-4 border-2 rounded-lg p-2 bg-yellow-300'> {vidTitle} </p>
        </div>
      </div>
      <VideoModal isOpen={isOpen} onClose={closeModal} videoUrl={videoUrl} />
    </div>


  );
};

export default VideoThumbnail;
