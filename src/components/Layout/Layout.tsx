import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 to-slate-900 dark:from-slate-950 dark:to-slate-900 light:from-slate-100 light:to-white text-white light:text-slate-900 transition-colors duration-300">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default Layout;