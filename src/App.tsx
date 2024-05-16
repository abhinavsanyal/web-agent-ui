import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CommandInput from "./components/CommandInput";
import CommandList from "./components/CommandList";
import ControlBar from "./components/ControlBar";
import RightContainer from "./components/RightContainer";

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showIframe, setShowIframe] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleSelectPrompt = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <div className="flex h-screen ">
      <div className={`relative flex flex-col ${isExpanded ? "w-1/3" : "w-20"} border-r border-gray-300 pr-8 p-4 resize-x overflow-hidden transition-width duration-300`}>
        {isExpanded && (
          <>
            <CommandList onSelectPrompt={handleSelectPrompt} />
            <div className="mt-auto">
              <CommandInput input={inputText} onInputChange={setInputText} onToggleIframe={setShowIframe} />
              <ControlBar />
            </div>
          </>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 right-1 text-gray-600 hover:text-gray-800 z-50"
        >
          {isExpanded ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>
      <RightContainer showIframe={showIframe} />
    </div>
  );
};

export default App;
