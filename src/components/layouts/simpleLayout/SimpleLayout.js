import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

import {homeRoute} from '../../routePaths';
import logoUrl from '../../../styles/assets/logo.png';

import './simpleLayout.scss';

/**
 * The SimpleLayout component.
 */
export class SimpleLayout extends React.Component {
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
      <div id="simple-layout">
        <div id="simple-container" className="container" role="simple">
          <div id="simple-layout-wrapper-row" className="row">
            <div id="simple-layout-wrapper-column" className="column small-12 medium-6 medium-offset-3">
              <div id="simple-layout-top-row" className="row">
                <div id="simple-layout-top-column" className="column small-12">
                  <Link to={homeRoute}>
                    <img className="logo-img" src={logoUrl} alt="NEI" />
                  </Link>

                  {(this.props.pageTitle) && (
                    <h1 className="simple-layout-title">{this.props.pageTitle}</h1>
                  )}
                </div>
              </div>
              <div id="simple-layout-main-row" className="row">
                <div id="simple-layout-main-column" className="column small-12">
                  {this.props.page}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SimpleLayout.propTypes = {
  page: PropTypes.element,
  pageTitle: PropTypes.string,
};

export default SimpleLayout;
