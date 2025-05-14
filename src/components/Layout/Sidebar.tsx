import React from 'react';
import { Home, Compass, Tv, Users, Bookmark, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navItems = [
    { icon: <Home />, label: 'Feed', path: '/' },
    { icon: <Compass />, label: 'Explore', path: '/explore' },
    { icon: <Tv />, label: 'Reels', path: '/reels' },
    { icon: <Users />, label: 'Friends', path: '/friends' },
    { icon: <Bookmark />, label: 'Saved', path: '/saved' },
    { icon: <Settings />, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 z-50 
          bg-slate-900/90 backdrop-blur-lg
          border-r border-slate-800/50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              NexusWave
            </span>
            
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800/50 lg:hidden transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="flex flex-col items-center">
              <Avatar 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                size="lg"
                status="online"
              />
              <h3 className="mt-2 font-semibold text-lg">Alex Morgan</h3>
              <p className="text-sm text-slate-400">@alexmorgan</p>
            </div>
          </div>
          
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 transition group"
                  >
                    <span className="text-slate-400 group-hover:text-blue-500 transition">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/30">
              <h4 className="font-medium mb-2">Upgrade to Pro</h4>
              <p className="text-sm text-slate-400 mb-3">Get exclusive features and priority support</p>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition shadow-lg">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;