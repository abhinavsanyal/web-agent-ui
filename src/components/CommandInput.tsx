import React, { useState } from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import { postCommand } from '../api'; 

const CommandInput: React.FC<{ input: string, onInputChange: (input: string) => void, onToggleIframe: (toggle: boolean) => void }> = ({ input, onInputChange, onToggleIframe }) => {
  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && input.trim()) {
      onToggleIframe(true);  // Show iframe immediately
      await postCommand(input);
      onToggleIframe(false); // Hide iframe after getting response
    }
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        placeholder="Write a command..."
        className="w-full p-2 border border-gray-300 rounded"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={handleEnter}
      />
      <FaMicrophone className="text-gray-600 ml-2" />
      <FaCog className="text-gray-600 ml-2" />
    </div>
  );
};

export default CommandInput;
