import React from "react";
import { FaRedoAlt, FaPlay, FaForward } from "react-icons/fa";  

const ControlBar: React.FC = () => {
  return (
    <div className="mt-auto flex items-center justify-center text-md"> 
      <button className="flex flex-col items-center text-gray-800 mr-4">
        <FaRedoAlt className="mb-1" /> 
        <span>Start Over</span>
      </button>
      <button className="flex items-center justify-center bg-blue-600 text-white rounded-full p-4 mx-10">
        <FaPlay />
      </button>
      <button className="flex flex-col items-center text-gray-800 ml-4">
        <FaForward className="mb-1" /> 
        <span>Step</span>
      </button>
    </div>
  );
};

export default ControlBar;
