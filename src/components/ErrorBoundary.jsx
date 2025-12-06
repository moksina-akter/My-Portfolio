
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-red-500">Oops! Something went wrong.</h1>
                    <p className="mb-6 text-lg">We're sorry for the inconvenience. Please try refreshing the page.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all shadow-md"
                    >
                        Refresh Page
                    </button>
                    {this.state.error && (
                        <details className="mt-4 p-4 bg-white dark:bg-gray-800 rounded shadow-inner text-left max-w-2xl overflow-auto w-full">
                            <summary className="cursor-pointer font-medium mb-2">Error Details</summary>
                            <pre className="text-sm text-red-600 dark:text-red-400 whitespace-pre-wrap">{this.state.error.toString()}</pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
