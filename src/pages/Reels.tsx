import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Volume2, VolumeX } from 'lucide-react';
import Avatar from '../components/UI/Avatar';

interface Reel {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  video: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

const Reels: React.FC = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [muted, setMuted] = useState(true);
  const [reels, setReels] = useState<Reel[]>([
    {
      id: '1',
      user: {
        name: 'Emma Wilson',
        username: 'emmawilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-through-the-forest-32882-large.mp4',
      description: 'Morning run through the misty forest 🌲 #nature #running',
      likes: 14200,
      comments: 234,
      shares: 56,
      isLiked: false
    },
    {
      id: '2',
      user: {
        name: 'Mike Johnson',
        username: 'mikej',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },
      video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4',
      description: 'The universe is vast and beautiful ✨ #space #cosmos',
      likes: 28300,
      comments: 456,
      shares: 123,
      isLiked: true
    },
    {
      id: '3',
      user: {
        name: 'Sophia Chen',
        username: 'sophiac',
        avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg'
      },
      video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4',
      description: 'Ocean vibes 🌊 #beach #summer #relaxation',
      likes: 18900,
      comments: 321,
      shares: 72,
      isLiked: false
    }
  ]);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const handleLike = (index: number) => {
    const newReels = [...reels];
    newReels[index].isLiked = !newReels[index].isLiked;
    newReels[index].likes = newReels[index].isLiked ? 
      newReels[index].likes + 1 : 
      newReels[index].likes - 1;
    setReels(newReels);
    
    // Animation for like button
    const heartIcon = document.querySelector(`#heart-${reels[index].id}`);
    if (heartIcon && newReels[index].isLiked) {
      heartIcon.classList.add('scale-150');
      setTimeout(() => {
        heartIcon.classList.remove('scale-150');
      }, 300);
    }
  };
  
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0 && currentReel < reels.length - 1) {
      setCurrentReel(currentReel + 1);
    } else if (e.deltaY < 0 && currentReel > 0) {
      setCurrentReel(currentReel - 1);
    }
  };
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div 
      className="h-[calc(100vh-64px)] overflow-hidden mt-16"
      onWheel={handleScroll}
    >
      <div 
        className="h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${currentReel * 100}%)` }}
      >
        {reels.map((reel, index) => (
          <div key={reel.id} className="h-full relative bg-black">
            <video
              ref={el => videoRefs.current[index] = el}
              src={reel.video}
              className="w-full h-full object-cover"
              loop
              muted={muted}
              autoPlay={index === currentReel}
              playsInline
              onClick={() => {
                const video = videoRefs.current[index];
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
            
            {/* Content */}
            <div className="absolute bottom-20 left-0 right-0 p-4">
              <div className="flex items-start">
                <Avatar 
                  src={reel.user.avatar} 
                  size="md"
                  status="online"
                />
                
                <div className="ml-3 flex-1">
                  <div className="flex items-center">
                    <h3 className="font-semibold">{reel.user.name}</h3>
                    <span className="mx-2 text-slate-400">•</span>
                    <button className="text-sm font-medium text-blue-500">
                      Follow
                    </button>
                  </div>
                  
                  <p className="text-sm mt-1">{reel.description}</p>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6">
              <button 
                className="flex flex-col items-center"
                onClick={() => handleLike(index)}
              >
                <div className="h-10 w-10 rounded-full bg-slate-800/60 backdrop-blur-sm flex items-center justify-center mb-1">
                  <Heart 
                    id={`heart-${reel.id}`}
                    className={`h-6 w-6 ${reel.isLiked ? 'text-red-500 fill-red-500' : ''} transition-all duration-300`} 
                  />
                </div>
                <span className="text-sm">{formatNumber(reel.likes)}</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-slate-800/60 backdrop-blur-sm flex items-center justify-center mb-1">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="text-sm">{formatNumber(reel.comments)}</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-slate-800/60 backdrop-blur-sm flex items-center justify-center mb-1">
                  <Share2 className="h-6 w-6" />
                </div>
                <span className="text-sm">{formatNumber(reel.shares)}</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-slate-800/60 backdrop-blur-sm flex items-center justify-center">
                  <MoreHorizontal className="h-6 w-6" />
                </div>
              </button>
            </div>
            
            {/* Mute button */}
            <button 
              className="absolute top-20 right-4 h-10 w-10 rounded-full bg-slate-800/60 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setMuted(!muted)}
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            
            {/* Progress indicator */}
            <div className="absolute top-16 left-0 right-0 px-4">
              <div className="flex w-full space-x-1">
                {reels.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full flex-1 ${i === currentReel ? 'bg-white' : 'bg-slate-600'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;