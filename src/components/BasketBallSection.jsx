import React from 'react';
import basketballmainimg from "../assets/basketballsection.png";
import { Link } from 'react-router-dom';

const BasketBallSection = () => {
  return (
    <div className="mt-10 px-4">
      <div className="left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Don't Miss</h1>
       <Link to='/collection'><img 
        onClick={window.scrollTo(0,0)} src={basketballmainimg} 
          alt="Basketball" 
          className="w-full max-w-10xl mx-auto rounded-lg"
        /></Link>
      </div>
    </div>
  );
}

export default BasketBallSection;
