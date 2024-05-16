import React from "react";
import { IconType } from "react-icons";

interface CommandItemProps {
  icon: IconType;
  text: string;
  subtext: string;
  prompt: string;
  onSelectPrompt: (prompt: string) => void;
}

const CommandItem: React.FC<CommandItemProps> = ({ icon: Icon, text, subtext, prompt, onSelectPrompt }) => {
  return (
    <div className="flex items-center p-3 mb-3 bg-gray-100 rounded-lg shadow-sm cursor-pointer" onClick={() => onSelectPrompt(prompt)}>
        <Icon className="text-gray-600 flex-shrink-0 text-2xl mr-4" />
        <div className="flex flex-col">
            <span className="text-md font-semibold">{text}</span>
            <span className="text-sm text-gray-500">{subtext}</span>
        </div>
    </div>
  );
};

export default CommandItem;
