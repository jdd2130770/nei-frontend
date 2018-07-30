import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { homeRoute } from '../../routePaths';

import logoUrl from '../../../styles/assets/logo.png';
import * as routePaths from '../../routePaths';

import './mainNavBar.scss';

/**
 * The MainNavBar component.
 */
export class MainNavBar extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Returns whether or not the current route is active.
   *
   * @param {string} routeLocation
   * @returns {boolean}
   */
  isActiveRoute = (routeLocation) => {
    const locationInfo = this.props.location;
    if (!locationInfo || !locationInfo.pathname) {
      return false;
    }

    return Boolean(locationInfo.pathname.match(routeLocation));
  };

  /**
   * Returns a current indicator if the rive route location is matches the current route.
   *
   * @param {string} routeLocation
   * @returns {{}|null}
   */
  getCurrentIndicator = (routeLocation) => {
    if (this.isActiveRoute(routeLocation)) {
      return (<span className="sr-only">(current)</span>);
    }
    return null;
  };

  /**
   * Renders a top nav link.
   *
   * @param {string} routePath
   * @param {string} label
   * @param {string=} hash
   * @returns {{}}
   */
  renderTopNavItem = (routePath, label, hash) => {
    const to = {
      pathname: routePath,
    };
    if (hash) {
      to.hash = '#' + hash;
    }

    return (
      <li className={classNames('nav-item', { 'active': this.isActiveRoute(routePath, hash) })}>
        <Link
          className="nav-link"
          to={to}
        >{label} {this.getCurrentIndicator(routePath)}</Link>
      </li>
    );
  };

  /**
   * Renders a top nav dropdown link.
   *
   * @param {string} routePath
   * @param {string} label
   * @param {string=} hash
   * @returns {{}}
   */
  renderDropdownItem = (routePath, label, hash) => {
    const to = {
      pathname: routePath,
    };
    if (hash) {
      to.hash = '#' + hash;
    }

    return (
      <span data-toggle="collapse" data-target=".navbar-collapse.show">
        <Link
          className={classNames('dropdown-item', { 'active': this.isActiveRoute(routePath, hash) })}
          to={to}
        >{label} {this.getCurrentIndicator(routePath)}</Link>
      </span>
    );
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    return (
      <nav id="main-nav-bar" className="navbar navbar-expand-lg navbar-dark">
        <div className="top-logo-wrapper">
          <Link to={homeRoute}>
            <img className="top-logo" src={logoUrl} alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse-section"
          aria-controls="navbar-collapse-section"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar-collapse-section">
          <ul className="navbar-nav">
            {this.renderTopNavItem(routePaths.homeRoute, 'Home')}

            <li className="nav-item dropdown">
              <button
                type="button"
                className="btn btn-link nav-link dropdown-toggle"
                id="nav-dropdown-open-1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >811</button>
              <div className="dropdown-menu" aria-labelledby="nav-dropdown-open-1">
                {this.renderDropdownItem(routePaths.eightOneOneRoute, 'Overview')}

                {this.renderDropdownItem(routePaths.factsAndStatsRoute, 'Facts And Stats')}

                {this.renderDropdownItem(routePaths.statesRoute, 'State')}
              </div>
            </li>

            <li className="nav-item dropdown">
              <button
                type="button"
                className="btn btn-link nav-link dropdown-toggle"
                id="nav-dropdown-open-2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Safety</button>
              <div className="dropdown-menu" aria-labelledby="nav-dropdown-open-2">
                {this.renderDropdownItem(routePaths.preventionMeasuresRoute, 'Prevention Measures')}

                {this.renderDropdownItem(routePaths.leakRecognitionRoute, 'Leak Recognition')}

                {this.renderDropdownItem(routePaths.responseRoute, 'Leak Response')}

                {this.renderDropdownItem(routePaths.eooDamageReportingRoute, 'Damage Reporting')}
              </div>
            </li>

            <li className="nav-item dropdown">
              <button
                type="button"
                className="btn btn-link nav-link dropdown-toggle"
                id="nav-dropdown-open-3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Underground Infrastructure</button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="nav-dropdown-open-3">
                {this.renderDropdownItem(routePaths.ugiPipelinesRoute, 'Pipelines')}

                {this.renderDropdownItem(routePaths.ugiCommunicationsRoute, 'Communications')}

                {this.renderDropdownItem(routePaths.ugiElectricityRoute, 'Electricity')}

                {this.renderDropdownItem(routePaths.ugiWaterSewerRoute, 'Water & Sewer')}

                {this.renderDropdownItem(routePaths.resourcesRoute, 'Resources')}
              </div>
            </li>

            <li className="nav-item dropdown">
              <button
                type="button"
                className="btn btn-link nav-link dropdown-toggle"
                id="nav-dropdown-open-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >NEI</button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="nav-dropdown-open-4">
                {this.renderDropdownItem(routePaths.benefitsRoute, 'Intro and Goals', 'title-row')}

                {this.renderDropdownItem(routePaths.benefitsRoute, 'Campaign Drivers', 'drivers-row')}

                {this.renderDropdownItem(routePaths.benefitsRoute, 'Benefits', 'benefits-row')}

                {this.renderDropdownItem(routePaths.supportingCompaniesRoute, 'Supporting Companies')}

                {this.renderDropdownItem(routePaths.contactRoute, 'How You Can Help / Registration Form')}

                {this.renderDropdownItem(routePaths.contactRoute, 'Contact')}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

MainNavBar.propTypes = {
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

export default MainNavBar;
