import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const isMissingEnvVars = this.state.error?.message.includes('Missing Supabase environment variables');

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isMissingEnvVars ? 'Setup Required' : 'Something went wrong'}
            </h2>
            <p className="text-gray-600 mb-4">
              {isMissingEnvVars 
                ? 'Please click the "Connect to Supabase" button in the top right corner to set up your project.'
                : this.state.error?.message}
            </p>
            {!isMissingEnvVars && (
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Try again
              </button>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}