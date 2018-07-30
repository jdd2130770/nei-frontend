import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../common/link/Link';
import {stateChecklistRoute, stateLawRoute, stateLocateRequestRoute, stateResourcesRoute} from '../../routePaths';
import {replaceRouteParams} from '../../../utils/routeHelper';

import './stateSideNav.scss';

/**
 * The StateSideNav component.
 */
export class StateSideNav extends React.Component {
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
  isActiveClasses = (routeLocation) => {
    const locationInfo = this.props.location;
    if (!locationInfo || !locationInfo.pathname) {
      return '';
    }

    const urlParams = this.props.urlParams || {};
    const route = replaceRouteParams(routeLocation, urlParams);

    if (locationInfo.pathname.match(route)) {
      return 'active';
    }
    return '';
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const linkParams = {
      state: this.props.stateAbbreviation
    };
    const urlParams = this.props.urlParams || {};

    return (
      <ul id="state-side-nav" className="nav flex-column">
        <li className={classNames('nav-item', this.isActiveClasses(stateLocateRequestRoute))}>
          <Link to={stateLocateRequestRoute} params={linkParams}>
            <i className="fa-2x im-icon im-locate-request" />
            <span>Locate Request</span>
          </Link>
        </li>
        <li className={classNames('nav-item', this.isActiveClasses(stateChecklistRoute))}>
          <Link to={stateChecklistRoute} params={linkParams}>
            <i className="fa-2x im-icon im-checklist" />
            <span>Checklist</span>
          </Link>
        </li>
        <li className={classNames('nav-item', this.isActiveClasses(stateLawRoute))}>
          <Link to={stateLawRoute} params={linkParams}>
            <i className="fa-2x im-icon im-law" />
            <span>LAW</span>
          </Link>
        </li>
        <li className={classNames('nav-item', this.isActiveClasses(stateResourcesRoute))}>
          <Link to={stateResourcesRoute} params={linkParams}>
            <i className="fa-2x im-icon im-resources" />
            <span>Resources</span>
          </Link>
        </li>
      </ul>
    );
  }
}

StateSideNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,

  urlParams: PropTypes.object.isRequired,

  stateAbbreviation: PropTypes.string.isRequired,
};

export default StateSideNav;
