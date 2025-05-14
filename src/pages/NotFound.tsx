import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center p-4">
      <div className="mb-8">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          404
        </h1>
        <p className="text-2xl mt-4 mb-6">Page not found</p>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button variant="primary">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;