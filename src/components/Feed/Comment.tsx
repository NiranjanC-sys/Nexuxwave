import React, { useState } from 'react';
import { Heart, Reply } from 'lucide-react';
import Avatar from '../UI/Avatar';

interface CommentProps {
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timeAgo: string;
  likes: number;
}

const Comment: React.FC<CommentProps> = ({ user, content, timeAgo, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="flex">
      <Avatar 
        src={user.avatar} 
        size="xs" 
      />
      
      <div className="ml-2 flex-1">
        <div className="bg-slate-800/50 rounded-2xl rounded-tl-none px-4 py-2 inline-block">
          <div className="flex items-center mb-1">
            <span className="font-medium text-sm">{user.name}</span>
            <span className="mx-1 text-slate-600 text-xs">•</span>
            <span className="text-slate-400 text-xs">{timeAgo}</span>
          </div>
          <p className="text-sm">{content}</p>
        </div>
        
        <div className="flex items-center mt-1 ml-2 text-xs text-slate-400">
          <button 
            className="flex items-center mr-3 hover:text-slate-300 transition"
            onClick={handleLike}
          >
            <Heart className={`h-3 w-3 mr-1 ${isLiked ? 'text-red-500 fill-red-500' : ''}`} />
            <span>{likeCount}</span>
          </button>
          
          <button className="flex items-center hover:text-slate-300 transition">
            <Reply className="h-3 w-3 mr-1" />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;