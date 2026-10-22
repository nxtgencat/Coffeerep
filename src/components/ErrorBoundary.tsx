import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Last line of defence: a render error shows a readable message instead of an
 * empty page. Also the single place a runtime failure gets logged.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled UI error:", error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <main className="grid min-h-dvh place-items-center bg-surface px-6 text-center">
        <div className="max-w-sm">
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-sm text-muted">{error.message}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 h-12 w-full rounded-2xl bg-primary text-base font-semibold text-white transition hover:brightness-105 active:scale-[.98]"
          >
            Reload
          </button>
        </div>
      </main>
    );
  }
}
