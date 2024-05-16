import React from "react";
import { FaRedoAlt, FaPlay, FaStop } from "react-icons/fa";

const ControlBar: React.FC = () => {
  return (
    <div className="mt-auto flex items-center justify-between">
      <button className="flex items-center text-blue-600">
        <FaRedoAlt className="mr-2" />
        <span>Start Over</span>
      </button>
      <button className="flex items-center text-blue-600">
        <FaPlay className="mr-2" />
      </button>
      <button className="flex items-center text-blue-600">
        <FaStop className="mr-2" />
        <span>Stop</span>
      </button>
    </div>
  );
};

export default ControlBar;
