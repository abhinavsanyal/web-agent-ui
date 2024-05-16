import React from 'react';

interface RightContainerProps {
  showIframe: boolean;
}

const RightContainer: React.FC<RightContainerProps> = ({ showIframe }) => {
  return (
    <div className="flex-1 p-10 flex flex-col justify-center items-center  bg-gray-100 ">
      {showIframe ? (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe src="http://54.67.123.43:6080/vnc_auto.html" className="w-full h-full"></iframe>
      ) : (
        <>
          <div className="flex items-center mb-4 text-center">
            <i className="fas fa-play-circle text-4xl text-gray-600 mr-2"></i>
            <h1 className="text-5xl font-bold">Playground</h1>
          </div>
          <div className="text-gray-600">
            <p className="mb-2">
              Your live preview will start here. To get started:
            </p>
            <ol className="list-decimal list-inside">
              <li>Type in a query or choose one of the examples on the chat interface to get started</li>
              <li>We support some websites that require authentication, in which a login button will appear</li>
              <li>You may interact with the screen to take over control or correct the agent</li>
            </ol>
          </div>
        </>
      )}
    </div>
  );
};

export default RightContainer;
