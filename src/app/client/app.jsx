import React, {Component} from 'react';

import Header from './header/header';

import './app.import.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
};

export default App;