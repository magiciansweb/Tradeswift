// VideoModal.js
import React from 'react';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';
import './video-modal.css'

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      ariaHideApp={false} // Prevents a11y issues
      className="video-modal"
    >
      <button className="close-button" onClick={onClose}>X</button>
      <ReactPlayer url={videoUrl} controls={true} />
    </ReactModal>
  );
};

export default VideoModal;
