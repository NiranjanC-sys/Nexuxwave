import React from 'react';
import { Hash, TrendingUp, Users } from 'lucide-react';
import Avatar from '../UI/Avatar';

const TrendingPanel: React.FC = () => {
  const trendingTopics = [
    { name: '#TechTrends2025', posts: '128K posts' },
    { name: '#ArtificialIntelligence', posts: '95K posts' },
    { name: '#DigitalNomads', posts: '42K posts' },
    { name: '#FutureTech', posts: '37K posts' },
    { name: '#Metaverse', posts: '22K posts' },
  ];
  
  const suggestedUsers = [
    { name: 'Sarah Parker', username: '@sarahp', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { name: 'David Kim', username: '@davidk', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
    { name: 'Jessica Liu', username: '@jessical', avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg' },
  ];

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 overflow-hidden">
        <div className="p-4 border-b border-slate-800/50">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-semibold">Trending Topics</h3>
          </div>
        </div>
        
        <div className="divide-y divide-slate-800/50">
          {trendingTopics.map((topic, index) => (
            <a
              key={index}
              href="#"
              className="block p-4 hover:bg-slate-800/30 transition"
            >
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                  <Hash className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{topic.name}</p>
                  <p className="text-sm text-slate-400">{topic.posts}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 overflow-hidden">
        <div className="p-4 border-b border-slate-800/50">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="font-semibold">Suggested for you</h3>
          </div>
        </div>
        
        <div className="divide-y divide-slate-800/50">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="p-4 hover:bg-slate-800/30 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar src={user.avatar} size="sm" />
                  <div className="ml-3">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-slate-400">{user.username}</p>
                  </div>
                </div>
                
                <button className="text-sm font-medium text-blue-500 hover:text-blue-400 transition">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:text-blue-400 transition">
            View all suggestions
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingPanel;