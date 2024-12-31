import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { SlideMenu } from './SlideMenu';
import { ThemeToggle } from '../ui/ThemeToggle';
import recruiticaLogo from '../../assets/recruitica-logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Jobs', href: '/jobs' },
    { name: 'Companies', href: '/companies' },
    { name: 'Education', href: '/education' },
    { name: 'Blog', href: '/blog' },
    { name: 'Forum', href: '/forum' },
    { name: 'Contact', href: '/contact' }
  ];

  // Format email to prevent overflow
  const formatEmail = (email: string | undefined) => {
    if (!email) return '';
    if (email.length > 20) {
      return `${email.substring(0, 17)}...`;
    }
    return email;
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={recruiticaLogo} 
                  alt="Recruitica" 
                  className="h-8 w-auto"
                />
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    } px-1 py-2 text-sm font-medium transition-colors`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <ThemeToggle />
              {user ? (
                <button
                  onClick={() => setIsSlideMenuOpen(true)}
                  className="flex items-center gap-2 group"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <UserCircle className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <span 
                    className="max-w-[150px] truncate text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" 
                    title={user?.email || ''}
                  >
                    {formatEmail(user?.email)}
                  </span>
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <SlideMenu 
        isOpen={isSlideMenuOpen}
        onClose={() => setIsSlideMenuOpen(false)}
      />
    </>
  );
}