import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  X, 
  LayoutDashboard, 
  UserCircle, 
  Settings, 
  Bell, 
  BookMarked,
  FileText,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: UserCircle, label: 'Profile', href: '/profile' },
    { icon: FileText, label: 'Applications', href: '/applications' },
    { icon: BookMarked, label: 'Saved Jobs', href: '/saved-jobs' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const handleSignOut = async () => {
    await signOut();
    onClose();
    navigate('/');
  };

  // Format email to prevent overflow
  const formatEmail = (email: string) => {
    if (!email) return '';
    if (email.length > 25) {
      return `${email.substring(0, 22)}...`;
    }
    return email;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed left-0 top-0 h-full w-[300px] bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white max-w-[200px] truncate" title={user?.email}>
                  {user?.email && formatEmail(user.email)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Candidate
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t dark:border-gray-700">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}