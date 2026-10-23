import { Component, type ReactNode } from 'react'

export class ErrorBoundary extends Component<{ children: ReactNode; resetKey: string }, { error: Error | null }> {
  state: { error: Error | null } = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidUpdate(prev: { resetKey: string }) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null })
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="rounded-xl border border-bad/40 bg-bad-soft p-5">
        <p className="font-semibold text-bad">Trang này gặp lỗi khi hiển thị.</p>
        <p className="mt-1 font-mono text-sm">{this.state.error.message}</p>
        <button type="button" className="mt-3 rounded-lg border border-line bg-surface px-3 py-1" onClick={() => this.setState({ error: null })}>
          Thử lại
        </button>
      </div>
    )
  }
}
