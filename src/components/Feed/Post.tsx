import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import Avatar from '../UI/Avatar';
import Comment from './Comment';

interface PostProps {
  post: {
    id: string;
    user: {
      username: string;
      name: string;
      avatar: string;
    };
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    timeAgo: string;
    isLiked: boolean;
  };
  onLike: () => void;
}

const Post: React.FC<PostProps> = ({ post, onLike }) => {
  const [showComments, setShowComments] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const handleLike = () => {
    onLike();
    
    if (!post.isLiked) {
      // Animation effect when liking
      const heartIcon = document.querySelector(`#heart-${post.id}`);
      if (heartIcon) {
        heartIcon.classList.add('scale-150', 'text-red-500');
        setTimeout(() => {
          heartIcon.classList.remove('scale-150');
        }, 300);
      }
    }
  };
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Avatar 
              src={post.user.avatar} 
              size="sm" 
            />
            <div className="ml-3">
              <span className="font-medium">{post.user.name}</span>
              <div className="flex items-center text-sm">
                <span className="text-slate-400">@{post.user.username}</span>
                <span className="mx-1 text-slate-600">•</span>
                <span className="text-slate-400">{post.timeAgo}</span>
              </div>
            </div>
          </div>
          
          <button className="p-2 rounded-full hover:bg-slate-800/50 transition">
            <MoreHorizontal className="h-5 w-5 text-slate-400" />
          </button>
        </div>
        
        {/* Content */}
        <div className="mb-3">
          <p className="whitespace-pre-line">{post.content}</p>
        </div>
        
        {/* Image */}
        {post.image && (
          <div className="w-full h-72 sm:h-96 -mx-4 px-4 mb-3">
            <img 
              src={post.image} 
              alt="Post" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        )}
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
          <span>{post.likes} likes</span>
          <div className="flex items-center space-x-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between border-t border-slate-800/50 pt-3">
          <button 
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/50 transition"
            onClick={handleLike}
          >
            <Heart 
              id={`heart-${post.id}`}
              className={`h-5 w-5 ${post.isLiked ? 'text-red-500 fill-red-500' : 'text-slate-400'} transition-all duration-300`} 
            />
            <span className={post.isLiked ? 'text-red-500' : ''}>Like</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/50 transition"
            onClick={toggleComments}
          >
            <MessageCircle className="h-5 w-5 text-slate-400" />
            <span>Comment</span>
          </button>
          
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/50 transition">
            <Share2 className="h-5 w-5 text-slate-400" />
            <span>Share</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/50 transition"
            onClick={toggleSave}
          >
            <Bookmark 
              className={`h-5 w-5 ${saved ? 'text-blue-500 fill-blue-500' : 'text-slate-400'} transition-all duration-300`} 
            />
            <span className={saved ? 'text-blue-500' : ''}>Save</span>
          </button>
        </div>
      </div>
      
      {/* Comments */}
      {showComments && (
        <div className="bg-slate-900/80 p-4 border-t border-slate-800/50">
          <div className="flex items-center mb-4">
            <Avatar 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              size="xs" 
            />
            <div className="flex-1 ml-2">
              <input 
                type="text" 
                placeholder="Write a comment..." 
                className="w-full bg-slate-800/50 rounded-full px-4 py-2 text-sm border border-slate-700/50 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <Comment 
              user={{
                name: "Emma Wilson",
                username: "emmawilson",
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              }}
              content="Amazing design! The colors are spot on 🔥"
              timeAgo="1h"
              likes={12}
            />
            
            <Comment 
              user={{
                name: "James Taylor",
                username: "james",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              }}
              content="Could you share more about the tools you used for this?"
              timeAgo="45m"
              likes={4}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;