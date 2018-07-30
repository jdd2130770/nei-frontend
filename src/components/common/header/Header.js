import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavBar } from '../mainNavBar/MainNavBar';

// import * as routePaths from '../../routePaths';

import './header.scss';

/**
 * The MainNavBar component.
 */
export class Header extends React.Component {
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
      <div id="header">
        <div className="hero-slider">
          <MainNavBar
            location={this.props.location}
            match={this.props.match}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
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
  pageTitle: PropTypes.string
};

export default Header;
