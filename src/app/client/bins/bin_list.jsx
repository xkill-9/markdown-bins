import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from 'app/imports/collections/bins';
import './bin_list.import.scss';

class BinsList extends Component {
  handleOnBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }

  renderList() {
    return this.props.bins.map( bin => {
      const url = `/bins/${bin._id}`;
      return (
        <li className="list-group-item" key={bin._id}>
          <Link to={url}>Bin {bin._id}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => { this.handleOnBinRemove(bin)}}
            >
              Remove
            </button>
          </span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');

  return { bins: Bins.find({}).fetch() }
}, BinsList)