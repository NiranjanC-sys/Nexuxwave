import React from 'react';
import { UserPlus, Users } from 'lucide-react';
import Avatar from '../components/UI/Avatar';
import Button from '../components/UI/Button';

const Friends: React.FC = () => {
  const friendRequests = [
    {
      id: '1',
      name: 'Sarah Parker',
      username: '@sarahp',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      mutualFriends: 12
    },
    {
      id: '2',
      name: 'David Kim',
      username: '@davidk',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      mutualFriends: 8
    }
  ];

  const suggestedFriends = [
    {
      id: '1',
      name: 'Jessica Liu',
      username: '@jessical',
      avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg',
      mutualFriends: 15
    },
    {
      id: '2',
      name: 'Michael Brown',
      username: '@michaelb',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      mutualFriends: 6
    },
    {
      id: '3',
      name: 'Emma Wilson',
      username: '@emmaw',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      mutualFriends: 4
    }
  ];

  return (
    <div className="mt-16 pb-16 lg:pb-0">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Friend Requests */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 overflow-hidden">
            <div className="p-4 border-b border-slate-800/50">
              <div className="flex items-center">
                <UserPlus className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold">Friend Requests</h3>
              </div>
            </div>
            
            <div className="divide-y divide-slate-800/50">
              {friendRequests.map(request => (
                <div key={request.id} className="p-4">
                  <div className="flex items-center">
                    <Avatar src={request.avatar} size="md" />
                    <div className="ml-3 flex-1">
                      <h4 className="font-medium">{request.name}</h4>
                      <p className="text-sm text-slate-400">{request.username}</p>
                      <p className="text-sm text-slate-400 mt-1">
                        {request.mutualFriends} mutual friends
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="primary" size="sm">Accept</Button>
                      <Button variant="secondary" size="sm">Decline</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Friends */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 overflow-hidden">
            <div className="p-4 border-b border-slate-800/50">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                <h3 className="font-semibold">Suggested Friends</h3>
              </div>
            </div>
            
            <div className="divide-y divide-slate-800/50">
              {suggestedFriends.map(friend => (
                <div key={friend.id} className="p-4">
                  <div className="flex items-center">
                    <Avatar src={friend.avatar} size="md" />
                    <div className="ml-3 flex-1">
                      <h4 className="font-medium">{friend.name}</h4>
                      <p className="text-sm text-slate-400">{friend.username}</p>
                      <p className="text-sm text-slate-400 mt-1">
                        {friend.mutualFriends} mutual friends
                      </p>
                    </div>
                    <Button variant="secondary" size="sm">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Follow
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;