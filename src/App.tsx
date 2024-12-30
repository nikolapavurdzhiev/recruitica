import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { JobDetail } from './pages/JobDetail';
import { Companies } from './pages/Companies';
import { CompanyDetail } from './pages/CompanyDetail';
import { Blog } from './pages/Blog';
import { ArticleDetail } from './pages/ArticleDetail';
import { Forum } from './pages/Forum';
import { ForumCategory } from './pages/ForumCategory';
import { NewTopic } from './pages/NewTopic';
import { Auth } from './pages/Auth';
import { Contact } from './pages/Contact';
import { Podcasts } from './pages/Podcasts';
import { Settings } from './pages/Settings';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Applications } from './pages/Applications';
import { SavedJobs } from './pages/SavedJobs';
import { Notifications } from './pages/Notifications';
import { Help } from './pages/Help';
import { Education } from './pages/Education';
import { ChatWidget } from './features/chat/components/ChatWidget';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider>
          <Router>
            <AuthProvider>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
                <Header />
                <main className="flex-1 container mx-auto px-4 py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/jobs/:id" element={<JobDetail />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/companies/:id" element={<CompanyDetail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<ArticleDetail />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/forum/:slug" element={<ForumCategory />} />
                    <Route path="/forum/:slug/new" element={<NewTopic />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/podcasts" element={<Podcasts />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/signup" element={<Auth />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/applications" element={<Applications />} />
                    <Route path="/saved-jobs" element={<SavedJobs />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/help" element={<Help />} />
                  </Routes>
                </main>
                <Footer />
                <ChatWidget />
              </div>
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}