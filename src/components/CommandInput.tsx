import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaArrowUp, FaStop } from "react-icons/fa";
import { postCommand } from "../api";

const CommandInput: React.FC<{
  input: string;
  onInputChange: (input: string) => void;
  onToggleIframe: (toggle: boolean) => void;
}> = ({ input, onInputChange, onToggleIframe }) => {
  const [isLoading, setIsLoading] = useState(false);
  const abortController = useRef(new AbortController());
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submitInput = async () => {
    if (input.trim()) {
      setIsLoading(true);
      onToggleIframe(true);
      try {
        await postCommand(input, abortController.current.signal);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
      setIsLoading(false);
      onToggleIframe(false);
      onInputChange(""); // Clear input after command
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent new line on Enter key alone
      await submitInput();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
    adjustHeight();
  };

  const clearInput = () => {
    onInputChange(""); // Set input to empty string
    adjustHeight();
  };

  const cancelRequest = () => {
    abortController.current.abort(); // Abort the ongoing fetch request
    abortController.current = new AbortController(); // Create a new controller for future requests
    setIsLoading(false);
    onToggleIframe(false);
  };

  // Adjust the height of the textarea based on its content
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // Adjust height whenever the input changes
  useEffect(() => {
    adjustHeight();
  }, [input]);

  return (
    <div className="flex items-center mb-6 relative">
      <textarea
        ref={textareaRef}
        placeholder="Write a command..."
        className="w-full pl-2 pr-12 py-2 bg-gray-100 focus:outline-none resize-none overflow-hidden"
        style={{ maxHeight: "200px", borderRadius: "1rem" }}
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <FaMicrophone className="text-gray-600 absolute right-12" />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <div
          className={`rounded-full text-white p-1 cursor-pointer ${
            isLoading ? "bg-gray-700" : "bg-blue-500"
          }`}
        >
          {isLoading ? (
            <FaStop onClick={cancelRequest} />
          ) : (
            <FaArrowUp onClick={submitInput} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandInput;
