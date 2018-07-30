import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../common/header/Header';
import { LargeHeader } from '../../common/largeHeader/LargeHeader';
import logoUrl from '../../../styles/assets/footer-logo.png';
import * as routePaths from '../../routePaths';

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
      <div id="main-layout">
        {
          this.props.largeHeader ? (
            <LargeHeader
              pageTitle={this.props.pageTitle}
              location={this.props.location}
              match={this.props.match}
            />) : (
            <Header
              pageTitle={this.props.pageTitle}
              location={this.props.location}
              match={this.props.match}
            />
          )
        }
        <main id="main-container" role="main">
          {this.props.page}
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row footer-sitemap-row">
              <div className="col-xl-6 offset-xl-1">
                <div className="row left-side">
                  <div className="col-md-5 logo-column mt-5">
                    <img className="footer-sitemap-logo" src={logoUrl} />
                  </div>
                  <div className="col-md-7 mt-5">
                    <p>The National Excavator Initiative is an effort to raise the
                    awareness of a critically important program 811.</p>
                    <p>Contacting 811 before digging is the single most critical
                    action an excavator can take to help ensure their health and
                    safety are protected, while at the same time preventing
                    financial harm and environmental impact.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="row right-side">
                  <div className="col-md-5 mt-5">
                    <ul className="sitemap-links-list">
                      <li className="sitemap-links-title">NEI</li>
                      <li><Link className="sitemap-link" to={`${routePaths.benefitsRoute}#goal-row`}>Intro and Goals</Link></li>
                      <li><Link className="sitemap-link" to={`${routePaths.benefitsRoute}#drivers-row`}>Campaign Drivers</Link></li>
                      <li><Link className="sitemap-link" to={`${routePaths.benefitsRoute}#benefits-row`}>Benefits</Link></li>
                      <li><Link className="sitemap-link" to={routePaths.supportingCompaniesRoute}>Supporting Companies</Link></li>
                      <li><Link className="sitemap-link" to={`${routePaths.contactRoute}#registration-form-row`}>Registration Form</Link></li>
                      <li><Link className="sitemap-link" to={routePaths.contactRoute}>Contact</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-7 mt-5">
                    <ul className="sitemap-links-list">
                      <li className="sitemap-links-title">811</li>
                      <li><Link className="sitemap-link" to={routePaths.eightOneOneRoute}>Overview</Link></li>
                      <li><Link className="sitemap-link" to={routePaths.factsAndStatsRoute}>Facts and Stats</Link></li>
                      <li><Link className="sitemap-link" to={routePaths.statesRoute}>State</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row footer-row">
              <div className="col-sm-11 offset-sm-1">
                <i className="fa fa-copyright" /> 2018 Sander Resources. <span className="text-uppercase">All rights reserved.</span>
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
  largeHeader: PropTypes.bool,
  pageTitle: PropTypes.string
};

export default MainLayout;
