import React from 'react';
import video from "../assets/nikevideo.mp4";

const HeroVideoSection = () => {
  return (
    <div className="hero-video-section mt-1">
      <div className="video-section flex justify-center items-center">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[600px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[550px] object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroVideoSection;
