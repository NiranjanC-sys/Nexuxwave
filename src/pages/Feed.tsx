import React, { useState } from 'react';
import StoryBar from '../components/Feed/StoryBar';
import Post from '../components/Feed/Post';
import NewPostCard from '../components/Feed/NewPostCard';
import TrendingPanel from '../components/Feed/TrendingPanel';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      user: {
        username: 'alexmorgan',
        name: 'Alex Morgan',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
      },
      content: 'Just finished designing this new futuristic UI concept. What do you think? #design #ui #future',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      likes: 128,
      comments: 24,
      shares: 12,
      timeAgo: '2h',
      isLiked: false
    },
    {
      id: '2',
      user: {
        username: 'emmawilson',
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      content: 'Exploring new places. This view was absolutely breathtaking! 🏞️ #travel #adventure #nature',
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
      likes: 346,
      comments: 42,
      shares: 18,
      timeAgo: '4h',
      isLiked: true
    },
    {
      id: '3',
      user: {
        username: 'mikejohnson',
        name: 'Mike Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },
      content: 'Just launched my latest tech project after months of development. Check it out at the link in bio! #tech #development #launch',
      likes: 89,
      comments: 15,
      shares: 7,
      timeAgo: '6h',
      isLiked: false
    }
  ]);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { 
          ...post, 
          isLiked: !post.isLiked, 
          likes: post.isLiked ? post.likes - 1 : post.likes + 1 
        };
      }
      return post;
    }));
  };

  return (
    <div className="mt-16 pb-16 lg:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StoryBar />
          
          <div className="my-6">
            <NewPostCard />
          </div>
          
          <div className="space-y-6">
            {posts.map(post => (
              <Post 
                key={post.id}
                post={post}
                onLike={() => handleLike(post.id)}
              />
            ))}
          </div>
        </div>
        
        <div className="hidden lg:block">
          <TrendingPanel />
        </div>
      </div>
    </div>
  );
};

export default Feed;