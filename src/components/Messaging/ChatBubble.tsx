import React, { useState } from 'react';
import { Check, CheckCheck, Heart, Smile } from 'lucide-react';
import Avatar from '../UI/Avatar';

interface ChatBubbleProps {
  message: {
    id: string;
    sender: 'user' | 'contact';
    text: string;
    timestamp: string;
    status: 'sent' | 'delivered' | 'read';
    reactions?: string[];
  };
  contactAvatar: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, contactAvatar }) => {
  const [showReactions, setShowReactions] = useState(false);
  const [reactions, setReactions] = useState<string[]>(message.reactions || []);
  
  const isUser = message.sender === 'user';
  
  const statusIcon = {
    sent: <Check className="h-3 w-3" />,
    delivered: <CheckCheck className="h-3 w-3" />,
    read: <CheckCheck className="h-3 w-3 text-blue-500" />
  };
  
  const handleAddReaction = (emoji: string) => {
    if (reactions.includes(emoji)) {
      setReactions(reactions.filter(r => r !== emoji));
    } else {
      setReactions([...reactions, emoji]);
    }
    setShowReactions(false);
  };
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} group`}>
      {!isUser && (
        <Avatar 
          src={contactAvatar} 
          size="sm"
        />
      )}
      
      <div className={`relative max-w-[80%] ${isUser ? '' : 'ml-2'}`}>
        <div 
          className={`
            p-3 rounded-2xl ${isUser ? 'rounded-tr-none bg-gradient-to-br from-blue-600 to-purple-600' : 'rounded-tl-none bg-slate-800'}
            ${reactions.length > 0 ? 'mb-2' : ''}
          `}
        >
          <p className="whitespace-pre-line break-words">{message.text}</p>
          
          <div className={`flex items-center justify-end mt-1 text-xs ${isUser ? 'text-blue-200' : 'text-slate-400'}`}>
            <span>{message.timestamp}</span>
            {isUser && (
              <span className="ml-1">
                {statusIcon[message.status]}
              </span>
            )}
          </div>
        </div>
        
        {/* Reaction bar */}
        {reactions.length > 0 && (
          <div className={`flex items-center ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className="bg-slate-800 rounded-full py-0.5 px-2 flex items-center space-x-1">
              {reactions.map((emoji, index) => (
                <span key={index} className="text-sm cursor-pointer">{emoji}</span>
              ))}
            </div>
          </div>
        )}
        
        {/* Reaction button */}
        <button 
          className={`
            absolute ${isUser ? 'left-0' : 'right-0'} bottom-0 transform ${isUser ? '-translate-x-3' : 'translate-x-3'} translate-y-1/3
            h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center
            opacity-0 group-hover:opacity-100 hover:bg-slate-700 transition-all duration-200
          `}
          onClick={() => setShowReactions(!showReactions)}
        >
          <Heart className="h-4 w-4 text-pink-500" />
        </button>
        
        {/* Reaction picker */}
        {showReactions && (
          <div 
            className={`
              absolute bottom-10 ${isUser ? 'right-0' : 'left-0'} 
              bg-slate-800 rounded-xl p-2 shadow-lg border border-slate-700
              z-10
            `}
          >
            <div className="flex space-x-2">
              {['👍', '❤️', '😂', '😮', '😢', '🔥'].map(emoji => (
                <button
                  key={emoji}
                  className="text-xl hover:scale-125 transition-transform duration-200"
                  onClick={() => handleAddReaction(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;