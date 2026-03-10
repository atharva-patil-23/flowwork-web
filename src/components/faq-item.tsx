"use client";

import { useState } from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[#d8d3c8] rounded-[16px] bg-[#fdfaf5] overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center bg-transparent border-none cursor-pointer"
      >
        <span className="text-[15px] sm:text-[17px] font-bold text-[#1a1a1a] pr-4">{question}</span>
        <span className={`text-[24px] font-light text-[#1a1a1a] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-[14px] sm:text-[16px] text-[#4a4a4a] leading-[1.6]">
          {answer}
        </div>
      </div>
    </div>
  );
}
