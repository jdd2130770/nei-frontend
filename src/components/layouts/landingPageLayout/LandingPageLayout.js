import PropTypes from 'prop-types';
import React from 'react';

import {Header} from '../../common/header/Header';

import './mainLayout.scss';

/**
 * The MainLayout component.
 */
export class MainLayout extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    return (
      <div id="landing-layout">
        <Header
          location={this.props.location}
          match={this.props.match}
        />
        <main id="landing-container" role="main">
          {this.props.page}
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="col">
              <div className="row landing-row footer-row">
                <i className="fa fa-copyright" /> 2018 Sander Resources. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  page: PropTypes.element.isRequired,
};

export default MainLayout;
