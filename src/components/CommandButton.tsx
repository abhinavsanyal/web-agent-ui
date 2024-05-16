import React from "react";

interface CommandButtonProps {
  label: string;
  onClick: () => void;
}

const CommandButton: React.FC<CommandButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CommandButton;
