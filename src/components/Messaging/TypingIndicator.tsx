import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl rounded-tl-none py-3 px-4 inline-flex items-center">
      <div className="flex space-x-1.5">
        <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;