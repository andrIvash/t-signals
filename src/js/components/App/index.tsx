import React, { Component } from 'react';
import './index.scss';

interface HelloProps { compiler: string; framework: string; }

export class App extends Component<HelloProps, {}> {
  render() {
      return (
        <div className="wrapper">
          <div className="appInner"> 
            <h1 className="title">Hello from {this.props.compiler} and {this.props.framework}!</h1>
          </div>
        </div>
      )
  }
}

export default App;