/* eslint-disable react/no-multi-comp */

import PropTypes from 'prop-types';
import React from 'react';

import {buildRoutes} from '../routes';

/**
 * Application CSS/SCSS files.
 */
import '../../styles/scss/fontAwesomeMain.scss';
import '../../styles/scss/bootstrapMain.scss';
import '../../styles/css/icomoon.css';
import '../../styles/scss/theme.scss';
import './app.scss';

/**
 * Application JS files.
 */
import 'bootstrap/dist/js/bootstrap.bundle';

/**
 * Application assets.
 */
import '../../styles/assets/favicon.ico';

/**
 * The App component.
 *
 * @returns {{}}
 * @constructor
 */
const App = () => {
  return (
    <div className="app-wrapper">
      {buildRoutes()}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
  page: PropTypes.element,
  pageTitle: PropTypes.string,
};

export default App;
