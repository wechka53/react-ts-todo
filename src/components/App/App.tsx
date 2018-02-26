import * as React from 'react';

import { TodoContainer } from 'containers/TodoContaier';

import './App.css';

const logo = require('../../logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <TodoContainer/>
        </div>
      </div>
    );
  }
}

export default App;
