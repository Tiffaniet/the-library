import React from 'react';
import { Router, Route } from 'react-router-dom';

import AppContainer from '/imports/ui/layouts/app/App.js';
import Single from '/imports/ui/layouts/single/Single';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer}/>
      <Route exact path="/task/:id" component={Single} />
    </div>
  </Router> 
); 