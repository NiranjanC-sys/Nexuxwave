import React, { useState, useEffect, useRef } from 'react';
import { Search, Phone, Video, Info, Send, Smile, Image, Mic, ChevronLeft } from 'lucide-react';
import Avatar from '../components/UI/Avatar';
import ChatBubble from '../components/Messaging/ChatBubble';
import TypingIndicator from '../components/Messaging/TypingIndicator';

interface Message {
  id: string;
  sender: 'user' | 'contact';
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  reactions?: string[];
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastMessage?: string;
  lastActive?: string;
  unread?: number;
  isTyping?: boolean;
}

const Messages: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [showMobileChat, setShowMobileChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      status: 'online',
      lastMessage: 'That sounds great! When do you want to meet?',
      lastActive: 'Active now',
      unread: 2,
      isTyping: true
    },
    {
      id: '2',
      name: 'James Taylor',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      status: 'offline',
      lastMessage: "I'll check out that new design tool, thanks!",
      lastActive: '2h ago',
    },
    {
      id: '3',
      name: 'Sophia Chen',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg',
      status: 'online',
      lastMessage: "How's the project coming along?",
      lastActive: 'Active now',
    },
    {
      id: '4',
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      status: 'away',
      lastMessage: 'Did you see the game last night?',
      lastActive: '30m ago',
      unread: 1
    },
  ];
  
  useEffect(() => {
    if (selectedContact) {
      // Fetch messages for selected contact
      const initialMessages: Message[] = [
        {
          id: '1',
          sender: 'contact',
          text: 'Hey, how are you doing today?',
          timestamp: '10:30 AM',
          status: 'read'
        },
        {
          id: '2',
          sender: 'user',
          text: "I'm good! Just finished working on that design project we talked about.",
          timestamp: '10:32 AM',
          status: 'read'
        },
        {
          id: '3',
          sender: 'contact',
          text: "That sounds great! Can you show me what you've worked on?",
          timestamp: '10:33 AM',
          status: 'read'
        },
        {
          id: '4',
          sender: 'user',
          text: "I'll send you the mockups in a bit.",
          timestamp: '10:35 AM',
          status: 'read'
        },
        {
          id: '5',
          sender: 'contact',
          text: 'That sounds great! When do you want to meet to discuss the project further?',
          timestamp: '10:40 AM',
          status: 'read',
          reactions: ['👍', '❤️']
        },
      ];
      
      setMessages(initialMessages);
      setShowMobileChat(true);
    }
  }, [selectedContact]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedContact?.isTyping]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = () => {
    if (!message.trim() || !selectedContact) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);
    
    // Simulate message read
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
      ));
    }, 2000);
    
    // Simulate response
    if (selectedContact.id === '1') {
      setTimeout(() => {
        setSelectedContact(prev => prev ? { ...prev, isTyping: true } : null);
        
        setTimeout(() => {
          const responseMessage: Message = {
            id: (Date.now() + 1).toString(),
            sender: 'contact',
            text: "That sounds perfect! I'm free on Thursday afternoon if that works for you.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'read'
          };
          
          setMessages(prev => [...prev, responseMessage]);
          setSelectedContact(prev => prev ? { ...prev, isTyping: false } : null);
        }, 3000);
      }, 3000);
    }
  };
  
  const goBack = () => {
    setShowMobileChat(false);
    setSelectedContact(null);
  };

  return (
    <div className="mt-16 h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)]">
      <div className="h-full flex flex-col">
        <div className="flex-1 overflow-hidden flex">
          {/* Contacts List - Hidden on mobile when chat is open */}
          <div className={`w-full lg:w-1/3 border-r border-slate-800/50 ${showMobileChat ? 'hidden lg:block' : 'block'}`}>
            <div className="p-4 border-b border-slate-800/50">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search messages"
                  className="w-full bg-slate-800/50 rounded-full py-2 pl-10 pr-4 text-sm border border-slate-700/50 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-56px)]">
              {contacts.map(contact => (
                <div 
                  key={contact.id}
                  className={`cursor-pointer hover:bg-slate-800/30 transition p-3 ${selectedContact?.id === contact.id ? 'bg-slate-800/50' : ''}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-start">
                    <Avatar 
                      src={contact.avatar} 
                      size="md"
                      status={contact.status}
                    />
                    
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-slate-400">{contact.lastActive}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-slate-400 truncate max-w-[160px]">
                          {contact.isTyping ? (
                            <span className="text-blue-400 italic">typing...</span>
                          ) : contact.lastMessage}
                        </p>
                        
                        {contact.unread && (
                          <span className="h-5 min-w-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xs font-medium px-1.5">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area - Full width on mobile when chat is open */}
          <div className={`w-full lg:w-2/3 flex flex-col ${!showMobileChat ? 'hidden lg:flex' : 'flex'}`}>
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div className="p-3 border-b border-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center">
                    <button 
                      className="md:hidden p-2 mr-2"
                      onClick={goBack}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    
                    <Avatar 
                      src={selectedContact.avatar} 
                      size="sm"
                      status={selectedContact.status}
                    />
                    
                    <div className="ml-3">
                      <h3 className="font-medium">{selectedContact.name}</h3>
                      <p className="text-xs text-slate-400">{selectedContact.lastActive}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="p-2 rounded-full hover:bg-slate-800/50 transition">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </button>
                    
                    <button className="p-2 rounded-full hover:bg-slate-800/50 transition">
                      <Video className="h-5 w-5 text-slate-400" />
                    </button>
                    
                    <button className="p-2 rounded-full hover:bg-slate-800/50 transition">
                      <Info className="h-5 w-5 text-slate-400" />
                    </button>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {messages.map(msg => (
                      <ChatBubble 
                        key={msg.id}
                        message={msg}
                        contactAvatar={selectedContact.avatar}
                      />
                    ))}
                    
                    {selectedContact.isTyping && (
                      <div className="flex items-start">
                        <Avatar 
                          src={selectedContact.avatar} 
                          size="sm"
                        />
                        <div className="ml-2 mt-1">
                          <TypingIndicator />
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="p-3 border-t border-slate-800/50">
                  <div className="flex items-center bg-slate-800/50 rounded-full px-4 py-1 border border-slate-700/50">
                    <button className="p-2 rounded-full hover:bg-slate-700/50 transition">
                      <Smile className="h-5 w-5 text-slate-400" />
                    </button>
                    
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent border-none outline-none py-2 px-2"
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    
                    <div className="flex items-center space-x-1">
                      <button className="p-2 rounded-full hover:bg-slate-700/50 transition">
                        <Image className="h-5 w-5 text-slate-400" />
                      </button>
                      
                      <button className="p-2 rounded-full hover:bg-slate-700/50 transition">
                        <Mic className="h-5 w-5 text-slate-400" />
                      </button>
                      
                      <button 
                        className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="h-20 w-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-4">
                  <Send className="h-10 w-10 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
                <p className="text-slate-400 text-center max-w-md">
                  Select a conversation or start a new one to begin messaging
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;