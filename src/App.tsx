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
  const [summary, setSummary] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSelectPrompt = (prompt: string) => {
    setInputText(prompt);
  };

  // Update this method to accept a summary
  const handleToggleIframe = (toggle: boolean, summaryText?: string) => {
    setShowIframe(toggle);
    if (!toggle && summaryText) {
      console.log("Modal summary:", summaryText);
      setSummary(summaryText);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex h-screen">
      <div className={`relative flex flex-col ${isExpanded ? "w-1/4" : "w-20"} border-r border-gray-300 pr-8 p-5 pb-12 resize-x overflow-hidden transition-width duration-300`}>
        {isExpanded && (
          <>
            <CommandList onSelectPrompt={handleSelectPrompt} />
            <div className="mt-auto">
              <CommandInput input={inputText} onInputChange={setInputText} onToggleIframe={handleToggleIframe} />
              <ControlBar />
            </div>
          </>
        )}
        <button onClick={() => setIsExpanded(!isExpanded)} className="absolute top-4 right-1 text-gray-600 hover:text-gray-800 z-50">
          {isExpanded ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>
      <RightContainer showIframe={showIframe} summary={summary} showModal={showModal} onCloseModal={handleCloseModal} />
    </div>
  );
};

export default App;
