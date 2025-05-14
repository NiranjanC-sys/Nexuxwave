import React from 'react';
import { Home, Compass, Tv, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const navItems = [
    { icon: <Home className="h-6 w-6" />, label: 'Home', path: '/' },
    { icon: <Compass className="h-6 w-6" />, label: 'Explore', path: '/explore' },
    { icon: <Tv className="h-6 w-6" />, label: 'Reels', path: '/reels' },
    { icon: <MessageCircle className="h-6 w-6" />, label: 'Messages', path: '/messages' },
    { icon: <Users className="h-6 w-6" />, label: 'Friends', path: '/friends' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-900/80 backdrop-blur-md border-t border-slate-800/50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <span className="text-slate-400 group-hover:text-blue-500 transition">
              {item.icon}
            </span>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;