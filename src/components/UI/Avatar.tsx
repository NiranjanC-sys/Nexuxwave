import React from 'react';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away';
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = 'User avatar', 
  size = 'md',
  status,
  onClick
}) => {
  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    away: 'bg-yellow-500'
  };

  return (
    <div className="relative inline-block">
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} rounded-full object-cover border-2 border-slate-700 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      />
      
      {status && (
        <span 
          className={`absolute bottom-0 right-0 h-3 w-3 ${statusColors[status]} rounded-full border-2 border-slate-900`}
        />
      )}
    </div>
  );
};

export default Avatar;