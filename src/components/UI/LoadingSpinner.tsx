import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-t-2 border-purple-500 animate-spin-reverse"></div>
        <div className="absolute inset-4 rounded-full border-t-2 border-pink-500 animate-spin-slow"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;