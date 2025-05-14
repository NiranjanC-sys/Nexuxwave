import React from 'react';
import { Plus } from 'lucide-react';

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasUnviewed: boolean;
}

const stories: Story[] = [
  { id: '1', username: 'You', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg', hasUnviewed: false },
  { id: '2', username: 'emma', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', hasUnviewed: true },
  { id: '3', username: 'james', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', hasUnviewed: true },
  { id: '4', username: 'sophia', avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg', hasUnviewed: true },
  { id: '5', username: 'mike', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', hasUnviewed: true },
  { id: '6', username: 'olivia', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg', hasUnviewed: false },
  { id: '7', username: 'daniel', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg', hasUnviewed: true },
  { id: '8', username: 'lisa', avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg', hasUnviewed: true },
];

const StoryBar: React.FC = () => {
  return (
    <div className="relative overflow-x-auto py-4">
      <div className="flex space-x-4 px-2">
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full bg-slate-800 flex items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-slate-700 flex items-center justify-center">
                <Plus className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
          <span className="text-xs mt-2">Add Story</span>
        </div>
        
        {stories.map(story => (
          <div key={story.id} className="flex flex-col items-center">
            <div className="relative h-16 w-16">
              <div className={`absolute inset-0 rounded-full ${story.hasUnviewed ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500' : 'bg-slate-700'} p-[2px]`}>
                <div className="h-full w-full rounded-full bg-slate-900 p-[2px]">
                  <img 
                    src={story.avatar} 
                    alt={story.username} 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs mt-2">{story.username}</span>
          </div>
        ))}
      </div>
      
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
};

export default StoryBar;