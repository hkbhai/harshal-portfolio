import { Component } from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { Button } from '@ui/Button';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error reporting service in production
    if (import.meta.env.PROD) {
      // eslint-disable-next-line no-console
      console.error('Portfolio error boundary caught an error:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-6">
          <div className="max-w-md rounded-3xl border border-border bg-background-surface p-8 text-center shadow-card">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-error/10 text-error">
              <AlertCircle className="h-8 w-8" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
            <p className="mt-3 text-foreground-secondary">
              I apologize for the inconvenience. Please refresh the page to continue.
            </p>
            {this.state.error && (
              <pre className="mt-4 max-h-32 overflow-auto rounded-xl bg-background p-3 text-left text-xs text-foreground-muted">
                {this.state.error.message}
              </pre>
            )}
            <Button
              size="lg"
              className="mt-6 w-full"
              leftIcon={RefreshCcw}
              onClick={this.handleReset}
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
