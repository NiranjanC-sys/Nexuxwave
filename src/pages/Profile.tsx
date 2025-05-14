import React, { useState } from 'react';
import { Grid, BookOpen, Bookmark, Settings, MoreHorizontal } from 'lucide-react';
import Avatar from '../components/UI/Avatar';
import Button from '../components/UI/Button';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  const profileStats = [
    { label: 'Posts', value: '248' },
    { label: 'Followers', value: '12.4K' },
    { label: 'Following', value: '567' },
  ];
  
  const posts = [
    { id: '1', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg' },
    { id: '2', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' },
    { id: '3', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg' },
    { id: '4', image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg' },
    { id: '5', image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg' },
    { id: '6', image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg' },
  ];

  return (
    <div className="mt-16 pb-16 lg:pb-0">
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg" 
            alt="Cover" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        
        {/* Profile Info */}
        <div className="max-w-4xl mx-auto px-4 pb-4 relative -mt-16 md:-mt-24">
          <div className="flex flex-col md:flex-row md:items-end">
            <Avatar 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              size="xl"
              status="online"
              className="ring-4 ring-slate-900 mb-3 md:mb-0"
            />
            
            <div className="md:ml-6 flex-1">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-800/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">Alex Morgan</h1>
                    <p className="text-slate-400 mb-2">@alexmorgan</p>
                    <p className="text-sm mb-4">
                      Digital Product Designer & Developer. Creating futuristic experiences for the modern web.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="primary" size="sm">
                      Follow
                    </Button>
                    
                    <Button variant="secondary" size="sm">
                      Message
                    </Button>
                    
                    <button className="p-2 rounded-lg hover:bg-slate-800/50 transition">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap mt-3 md:mt-6 border-t border-slate-800/50 pt-4">
                  {profileStats.map((stat, index) => (
                    <div key={index} className="mr-6 mb-2">
                      <p className="text-lg font-semibold">{stat.value}</p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <div className="border-b border-slate-800/50">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              className={`flex items-center px-4 py-2 border-b-2 transition-colors ${
                activeTab === 'posts' 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              <Grid className="h-5 w-5 mr-2" />
              <span>Posts</span>
            </button>
            
            <button 
              className={`flex items-center px-4 py-2 border-b-2 transition-colors ${
                activeTab === 'stories' 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('stories')}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              <span>Stories</span>
            </button>
            
            <button 
              className={`flex items-center px-4 py-2 border-b-2 transition-colors ${
                activeTab === 'saved' 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              <Bookmark className="h-5 w-5 mr-2" />
              <span>Saved</span>
            </button>
            
            <button 
              className={`flex items-center px-4 py-2 border-b-2 transition-colors ${
                activeTab === 'settings' 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5 mr-2" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {posts.map(post => (
              <div 
                key={post.id}
                className="aspect-square overflow-hidden rounded-xl relative group"
              >
                <img 
                  src={post.image} 
                  alt={`Post ${post.id}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          128
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          24
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'stories' && (
          <div className="flex items-center justify-center h-64 text-slate-400">
            Stories will appear here
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className="flex items-center justify-center h-64 text-slate-400">
            Saved items will appear here
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="flex items-center justify-center h-64 text-slate-400">
            Profile settings will appear here
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;