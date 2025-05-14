import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Menu, Search, Bell, MessageCircle, Sun, Moon } from 'lucide-react';
import Avatar from '../UI/Avatar';
import SearchOverlay from '../Search/SearchOverlay';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-md shadow-lg dark:bg-slate-900/80 light:bg-white/80' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={onMenuClick}
                className="p-2 rounded-full hover:bg-slate-800/50 lg:hidden transition"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <div className="hidden lg:flex items-center">
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  NexusWave
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-slate-800/50 transition"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <button className="relative p-2 rounded-full hover:bg-slate-800/50 transition">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-[10px]">
                  3
                </span>
              </button>
              
              <button className="relative p-2 rounded-full hover:bg-slate-800/50 transition">
                <MessageCircle className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-[10px]">
                  2
                </span>
              </button>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-800/50 transition"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <Avatar 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                size="sm"
                status="online"
              />
            </div>
          </div>
        </div>
      </header>
      
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;