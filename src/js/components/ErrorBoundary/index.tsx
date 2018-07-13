import React, { Component } from 'react';

type State = { hasError: boolean };
type Props = {};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error): void {
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className='main-error'>Error: Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;