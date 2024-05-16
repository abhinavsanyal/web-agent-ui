import React from "react";
import CommandItem from "./CommandItem";
import { FaAmazon, FaHackerNews, FaUtensils, FaChartLine } from "react-icons/fa";

const commands = [
  {
    icon: FaAmazon,
    text: "Add the book Zero to One ",
    subtext: "in my Amazon cart",
    prompt: "Add Zero to One to my Amazon cart"
  },
  {
    icon: FaHackerNews,
    text: "What's the top post ",
    subtext: "on Hacker News?",
    prompt: "Show top post on Hacker News"
  },
  {
    icon: FaUtensils,
    text: "Reserve a table at Fogo de Chão ",
    subtext: "in San Jose for 2 people via OpenTable",
    prompt: "Reserve a table at Fogo de Chão"
  },
  {
    icon: FaChartLine,
    text: "How much did NVIDIA stock ",
    subtext: "gain today?",
    prompt: "Check NVIDIA stock price"
  },
];

const CommandList: React.FC<{ onSelectPrompt: (prompt: string) => void }> = ({ onSelectPrompt }) => {
  return (
    <div className="overflow-y-auto">
      {commands.map((command, index) => (
        <CommandItem key={index} icon={command.icon} text={command.text} subtext={command.subtext} prompt={command.prompt} onSelectPrompt={onSelectPrompt} />
      ))}
    </div>
  );
};

export default CommandList;
