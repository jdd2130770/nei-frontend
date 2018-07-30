import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavBar } from '../mainNavBar/MainNavBar';
import logoUrl from '../../../styles/assets/811-logo.png';

// import * as routePaths from '../../routePaths';

import './largeHeader.scss';

/**
 * The MainNavBar component.
 */
export class LargeHeader extends React.Component {
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
      <div id="large-header">
        <div className="hero-slider">
          <MainNavBar
            location={this.props.location}
            match={this.props.match}
          />
        </div>
        <div className="container-fluid inset-container">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="large-header-inset  mx-auto">
              <img className="inset-logo" src={logoUrl} />
              <div className="inset-content"><h2>Effort to raise the awareness of a critically importand program: 811.</h2></div>
              <div className="inset-footer">Safe Excavator Initiative</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LargeHeader.propTypes = {
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
};

export default LargeHeader;
