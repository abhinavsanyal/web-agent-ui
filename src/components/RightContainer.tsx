import React from 'react';
import { IoPlayOutline } from "react-icons/io5";

const RightContainer: React.FC<{ showIframe: boolean }> = ({ showIframe }) => {
  return (
    <div className="flex-1 p-10 flex flex-col justify-center items-center bg-gray-100 text-center">
      {showIframe ? (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe src="http://18.144.171.73:6080/vnc_auto.html" className="w-full h-full"></iframe>
      ) : (
        <>
          <div className="flex flex-col items-center mb-4">
            <IoPlayOutline className="text-5xl text-gray-300 mb-2" /> 
            <h1 className="text-6xl font-semibold text-gray-300">Playground</h1>
          </div>
          <p className="text-gray-400 text-xl font-thin mb-6">
            Your live preview will start here. To get started:
          </p>
          <div className="space-y-4 max-w-2xl mx-auto">
            <CustomListItem index={1} text="Type in a query or choose one of the examples on the chat interface to get started" />
            <CustomListItem index={2} text="We support some websites that require authentication, in which a login button will appear" />
            <CustomListItem index={3} text="You may interact with the screen to take over control or correct the agent" />
          </div>
        </>
      )}
    </div>
  );
};

const CustomListItem: React.FC<{ index: number; text: string }> = ({ index, text }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-xl p-4">
      <div className="text-5xl text-gray-400 mr-4">{index}</div>
      <div className="flex-1 text-gray-400 text-left">{text}</div>
    </div>
  );
};

export default RightContainer;
