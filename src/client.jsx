import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'app/client/app';
import BinsMain from 'app/client/bins/bins_main';
import BinsList from 'app/client/bins/bin_list';
import { Bins } from './app/imports/collections/bins';

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ BinsList } />
      <Route path="bins/:binId" component={BinsMain}></Route>
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('react-app'));
});