// Client entry point, imports all client code

// import '/imports/startup/client';
// import '/imports/startup/both';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '/imports/ui/layouts/renderRoutes/RenderRoutes'
 
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('library')
  );
});