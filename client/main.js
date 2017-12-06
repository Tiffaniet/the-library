// Client entry point, imports all client code

// import '/imports/startup/client';
// import '/imports/startup/both';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import AppContainer from '../imports/ui/layouts/app/App.js';
 
Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('library'));
});