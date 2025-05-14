import React, { useState, useEffect, useRef } from 'react';
import { X, Search, User, Hash, Tv } from 'lucide-react';
import Avatar from '../UI/Avatar';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open) return null;

  const recentSearches = [
    { type: 'user', name: 'Emma Wilson', username: '@emmawilson', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { type: 'hashtag', name: '#photography', posts: '24K posts' },
    { type: 'user', name: 'Mike Johnson', username: '@mikej', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
  ];

  const trendingTopics = [
    { type: 'hashtag', name: '#TechTrends2025', posts: '128K posts' },
    { type: 'hashtag', name: '#ArtificialIntelligence', posts: '95K posts' },
    { type: 'hashtag', name: '#DigitalNomads', posts: '42K posts' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        className="w-full max-w-2xl bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800/50 z-10 overflow-hidden animate-fadeIn"
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center p-4 border-b border-slate-800/50">
          <Search className="h-5 w-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none"
            placeholder="Search for people, hashtags, or content..."
          />
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800/50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="max-h-[70vh] overflow-y-auto p-4">
          {query.length === 0 ? (
            <>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-slate-400 mb-3">Recent Searches</h3>
                <div className="space-y-3">
                  {recentSearches.map((item, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <div className="flex items-center">
                        {item.type === 'user' ? (
                          <>
                            <Avatar src={item.image!} size="sm" />
                            <div className="ml-3">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-slate-400">{item.username}</p>
                            </div>
                          </>
                        ) : item.type === 'hashtag' ? (
                          <>
                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                              <Hash className="h-4 w-4" />
                            </div>
                            <div className="ml-3">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-slate-400">{item.posts}</p>
                            </div>
                          </>
                        ) : null}
                      </div>
                      <button className="text-slate-400 hover:text-white p-1 opacity-0 group-hover:opacity-100 transition">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-3">Trending Topics</h3>
                <div className="space-y-3">
                  {trendingTopics.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                        <Hash className="h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-slate-400">{item.posts}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="py-4 text-center text-slate-400">
              Press enter to search for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;