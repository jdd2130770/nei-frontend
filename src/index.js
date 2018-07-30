/* eslint-disable import/default */

import {createBrowserHistory as createHistory} from 'history';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';

import * as googleAnalytics from './googleAnalytics.js';
import App from './components/app/App';

//import './utils/logger';

googleAnalytics.init();

const routerHistory = createHistory();
routerHistory.listen((newLocation) => {
  googleAnalytics.track(newLocation);
});
googleAnalytics.track(routerHistory.location);

const renderApplication = (Component) => {
  render(
    <AppContainer>
      <Router history={routerHistory}>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApplication(App);
