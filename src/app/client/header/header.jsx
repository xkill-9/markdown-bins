import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Accounts from './accounts';
import './header.import.scss';

class Header extends Component {
  handleOnBinClick(event) {
    event.preventDefault();
    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`);
    });
  }

  render () {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">MarkBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.handleOnBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;