import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { routesPath } from './routesPath';
import Home from '../containers/Home';

const routes = (
  <Router>
    <Route path={routesPath.root} component={Home} />
    <Redirect from="*" to={routesPath.root} />
  </Router>
);

export default routes;
