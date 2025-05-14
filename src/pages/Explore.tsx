import React, { useState } from 'react';
import { Search, Compass, Tag, Zap, Users } from 'lucide-react';

interface ExploreItem {
  id: string;
  type: 'post' | 'reel' | 'story';
  image: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  likes?: number;
  comments?: number;
}

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All', icon: <Compass /> },
    { id: 'trending', name: 'Trending', icon: <Zap /> },
    { id: 'photography', name: 'Photography', icon: <Tag /> },
    { id: 'art', name: 'Art', icon: <Tag /> },
    { id: 'technology', name: 'Technology', icon: <Tag /> },
    { id: 'people', name: 'People', icon: <Users /> },
  ];
  
  const exploreItems: ExploreItem[] = [
    {
      id: '1',
      type: 'post',
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
      user: {
        name: 'Emma Wilson',
        username: 'emmawilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      likes: 2480,
      comments: 128
    },
    {
      id: '2',
      type: 'reel',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      user: {
        name: 'Mike Johnson',
        username: 'mikej',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },
      likes: 18900,
      comments: 342
    },
    {
      id: '3',
      type: 'post',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
      user: {
        name: 'Sophia Chen',
        username: 'sophiac',
        avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg'
      },
      likes: 1245,
      comments: 84
    },
    {
      id: '4',
      type: 'story',
      image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg',
      user: {
        name: 'Alex Morgan',
        username: 'alexmorgan',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
      }
    },
    {
      id: '5',
      type: 'post',
      image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg',
      user: {
        name: 'James Taylor',
        username: 'james',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
      },
      likes: 3280,
      comments: 156
    },
    {
      id: '6',
      type: 'reel',
      image: 'https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg',
      user: {
        name: 'Olivia Smith',
        username: 'olivias',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
      },
      likes: 24600,
      comments: 489
    },
    {
      id: '7',
      type: 'post',
      image: 'https://images.pexels.com/photos/1835712/pexels-photo-1835712.jpeg',
      user: {
        name: 'Daniel Lee',
        username: 'daniell',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
      },
      likes: 1870,
      comments: 92
    },
    {
      id: '8',
      type: 'story',
      image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg',
      user: {
        name: 'Lisa Wang',
        username: 'lisaw',
        avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
      }
    },
    {
      id: '9',
      type: 'post',
      image: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg',
      user: {
        name: 'Emma Wilson',
        username: 'emmawilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      likes: 3420,
      comments: 178
    },
  ];
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="mt-16 pb-16 lg:pb-0 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Search and Categories */}
        <div className="mb-6">
          <div className="relative mb-4">
            <input 
              type="text"
              placeholder="Search for people, hashtags, or content..."
              className="w-full bg-slate-800/50 rounded-full py-3 pl-12 pr-4 border border-slate-700/50 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar py-2 -mx-2">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`
                  flex items-center px-4 py-2 mx-2 rounded-full transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'}
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {exploreItems.map(item => (
            <div 
              key={item.id}
              className={`
                rounded-xl overflow-hidden relative group
                ${item.type === 'story' ? 'aspect-[9/16]' : 'aspect-square'}
              `}
            >
              <img 
                src={item.image} 
                alt={`Explore ${item.id}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center mb-2">
                    <img 
                      src={item.user.avatar} 
                      alt={item.user.name} 
                      className="h-6 w-6 rounded-full object-cover mr-2"
                    />
                    <span className="text-sm font-medium">@{item.user.username}</span>
                  </div>
                  
                  {item.likes && item.comments && (
                    <div className="flex items-center text-sm">
                      <span className="mr-3">{formatNumber(item.likes)} likes</span>
                      <span>{formatNumber(item.comments)} comments</span>
                    </div>
                  )}
                </div>
              </div>
              
              {item.type === 'reel' && (
                <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full px-2 py-1">
                  Reel
                </div>
              )}
              
              {item.type === 'story' && (
                <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full px-2 py-1">
                  Story
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;