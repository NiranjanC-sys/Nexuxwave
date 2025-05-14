import React, { useState } from 'react';
import { Image, Smile, MapPin, Calendar, Tag } from 'lucide-react';
import Avatar from '../UI/Avatar';
import Button from '../UI/Button';

const NewPostCard: React.FC = () => {
  const [content, setContent] = useState('');
  
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 p-4">
      <div className="flex items-start">
        <Avatar 
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
          size="sm" 
        />
        
        <div className="ml-3 flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-transparent border-none outline-none resize-none py-2 text-sm min-h-[80px]"
          />
          
          <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-800/50">
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg hover:bg-slate-800/50 transition">
                <Image className="h-5 w-5 text-green-500" />
              </button>
              
              <button className="p-2 rounded-lg hover:bg-slate-800/50 transition">
                <Smile className="h-5 w-5 text-yellow-500" />
              </button>
              
              <button className="p-2 rounded-lg hover:bg-slate-800/50 transition">
                <MapPin className="h-5 w-5 text-red-500" />
              </button>
              
              <button className="p-2 rounded-lg hover:bg-slate-800/50 transition">
                <Tag className="h-5 w-5 text-blue-500" />
              </button>
              
              <button className="p-2 rounded-lg hover:bg-slate-800/50 transition">
                <Calendar className="h-5 w-5 text-purple-500" />
              </button>
            </div>
            
            <Button 
              variant="primary" 
              size="sm"
              disabled={!content.trim()}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;