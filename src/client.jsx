import ReactDom from 'react-dom';
import App from 'app/client/app';
import React from 'react';

Meteor.startup(() => {
  ReactDom.render(<App />, document.getElementById('react-app'));
});