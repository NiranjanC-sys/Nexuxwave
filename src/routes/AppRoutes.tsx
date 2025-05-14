import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Feed = lazy(() => import('../pages/Feed'));
const Explore = lazy(() => import('../pages/Explore'));
const Reels = lazy(() => import('../pages/Reels'));
const Messages = lazy(() => import('../pages/Messages'));
const Friends = lazy(() => import('../pages/Friends'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Saved = lazy(() => import('../pages/Saved'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;