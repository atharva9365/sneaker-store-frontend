import React from 'react'
import video from "../assets/nikevideo.mp4";



const HeroVideoSection = () => {
  return (
    <>
      <div className="hero-video-section mt-1"> {/* Add margin-top using mt-8 */}
        <div className="video-section flex justify-center items-center">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] md:h-[600px] lg:h-[550px]" 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  )
}

export default HeroVideoSection