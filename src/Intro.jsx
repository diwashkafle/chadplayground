import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import song from  "./music/chad.mp3";
import image from "./image/chad.png";
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    
    <div className=" h-full bg-black flex flex-col items-center">
    <div className="flex justify-center">
    <h1 className="text-8xl font-bold text-white mt-20">Chad's</h1>
  <img className="h-[400px]" src={image} alt="chad" />
  <h1 className="text-8xl font-bold text-white mt-20">PlayGround</h1>
    </div>
    <Link to="/home">
    <button className="p-5 relative -left-24 top-5 rounded-md text-white text-2xl font-bold bg-gray-600">Get there</button>
    </Link>
    <ReactAudioPlayer
    className="absolute bottom-2 -ml-20"
src={song}
autoPlay
loop
controls
/>
  </div>
  )
}

export default Intro