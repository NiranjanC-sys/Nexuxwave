import React from 'react';
import { Bookmark } from 'lucide-react';

const Saved: React.FC = () => {
  return (
    <div className="mt-16 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="h-12 w-12 rounded-full bg-slate-800/50 flex items-center justify-center mr-4">
            <Bookmark className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold">Saved Items</h1>
        </div>
        
        <div className="bg-slate-800/20 rounded-lg p-6">
          <p className="text-slate-400">
            Your saved items will appear here. Start saving posts and content to view them later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Saved;