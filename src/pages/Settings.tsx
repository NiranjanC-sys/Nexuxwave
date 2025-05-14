import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="mt-16 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="h-12 w-12 rounded-full bg-slate-800/50 flex items-center justify-center mr-4">
            <SettingsIcon className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        
        <div className="bg-slate-800/20 rounded-lg p-6">
          <p className="text-slate-400">
            Settings page is under construction. Check back soon for account, privacy, and notification settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;