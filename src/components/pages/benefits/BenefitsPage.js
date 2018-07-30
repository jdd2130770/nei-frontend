import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle'
import {Link} from 'react-router-dom';
import scrollToElement from 'scroll-to-element';

import {sponsorshipOptionsRoute, contactRoute} from '../../routePaths';

import './benefitsPage.scss';

import ourGoalImage from './assets/nei-our-goal.jpg';
import PropTypes from 'prop-types';

/**
 * The BenefitsPage component.
 *
 * @constructor
 */
export class BenefitsPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Triggers when the component mounts to the page.
   */
  componentDidMount() {
    this.jumpToHash();
  }

  /**
   * Triggers when the component updates.
   */
  componentDidUpdate() {
    this.jumpToHash();
  }

  /**
   * Scrolls the page to the element specified in the hash.
   */
  jumpToHash = () => {
    if (!this.props.location || !this.props.location.hash) {
      return;
    }

    const hash = this.props.location.hash.replace(/[^a-zA-Z0-9-]/ig, '');

    // The setTimeout prevents a bad offset when reloading the page.
    setTimeout(() => {
      scrollToElement('#' + hash, {offset: 0});
    }, 0);
  };

  /**
   * Gets the element for a benefit item.
   *
   * @param {string} benefitText
   * @returns {{}}
   */
  getBenefitItem = (benefitText) => {
    return (
      <div className="benefit-item row">
        <div className="benefit-item-icon col-2">
          <i className="icon-circle fa fa-2x fa-check-circle" aria-hidden="true" />
        </div>
        <div className="benefit-item-label col-10">{benefitText}</div>
      </div>
    );
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    return (
      <div id="benefits-page" className="system-page">
        <PageTitle title="Benefits"/>
        <div className="container-fluid">
          <div id="title-row" className="main-row row-odd row">
            <div className="col">
              <h1 className="nei-h">The National Excavator Initiative</h1>
              <p>
                A new, first-of-its-kind collaborative effort designed to increase awareness and help change the
                behavior of excavators. The initiative will develop videos, state-specific brochures and other
                newly created electronic and social media materials to deliver underground damage prevention,
                pipeline awareness and safe digging messages. This multi-year, multifaceted effort is open to
                anyone interested in supporting and promoting damage prevention.
              </p>
            </div>
          </div>

          <div id="goal-row" className="main-row row-even row">
            <div className="col-sm-4">
              <img className="our-goal-image" src={ourGoalImage} />
            </div>
            <div className="col-sm">
              <h2 className="h1 nei-h">Our Goal</h2>
              <p>
                The goal of the National Excavator Initiative is to present a united damage prevention campaign
                targeting excavators that provides meaningful information regarding underground damage prevention,
                underground facility awareness and safety messages designed to drive continued awareness and
                behavior change.
              </p>
              <p>
                <span className="disclaimer">Disclaimer:</span>
                <span>A larger, excavator-focused website will be launched on this site later this year, but for now,
                  learn more about the National Excavator Initiative and how to get involved.</span>
              </p>
            </div>
          </div>

          <div id="drivers-row" className="main-row row-odd row">
            <div className="col">
              <h2 className="h1 nei-h">Campaign Drivers</h2>
              <div className="row">
                <div className="col">
                  <p>
                    Every six minutes in the U.S., an underground utility line (including water, sewer, cable
                    and electric lines as well as pipelines) is damaged because someone decided to dig without
                    contacting 811 first.
                    <span className="smaller">
                      (We didn’t make up this statistic, see: the&nbsp;
                      <Link to="http://commongroundalliance.com/811-faqs">Common Ground Alliance</Link>
                      (CGA).
                    </span>
                  </p>
                  <p>
                    Contacting 811 (in the U.S.) is the single most critical action to ensure an excavator’s health
                    and safety are protected, while at the same time preventing financial harm and environmental
                    impact.
                  </p>
                  <p>
                    The damage caused by excavating is one of the most common causes of pipeline and utility
                    accidents, more than 30 percent of damages are caused by people not making a one call request.
                    — In most cases, this damage is also preventable.
                  </p>
                </div>
                <div className="col">
                  <p>
                    Despite 811 being a simple phone number to call to have underground lines marked, according
                    to the&nbsp;<Link
                    to="http://commongroundalliance.com/sites/default/files/publications/DIRT_Analysis_and_Recommendations_2015_Report_Final.pdf"
                  >CGA DIRT Report</Link>
                    , an estimated 30 percent of excavators still do not contact 811
                    before digging.
                  </p>
                  <p>
                    811 is the national “Call Before You Dig” phone number to request to have underground lines
                    marked using paint, flags or stakes. This call is generally free and required by law.
                    <span className="smaller">
                      (The option also exists to fill out an online form and submit 811 request(s) electronically.)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="sponsorship-row" className="main-row row-even row">
            <div className="col">
              <h2 className="h1 nei-h sponsorship-title">Sponsorship Options</h2>
              <div>
                <Link to={sponsorshipOptionsRoute} className="btn btn-primary btn-lg">Learn More</Link>
              </div>
            </div>
          </div>

          <div id="benefits-row" className="main-row row-odd row">
            <div className="col">
              <h2 className="h1 nei-h sponsorship-title">Benefits</h2>
              <div className="row">
                <div className="col-sm">
                  {this.getBenefitItem(
                    'A first-of-its kind collaborative effort with a fresh, new creative approach.'
                  )}
                </div>
                <div className="col-sm">
                  {this.getBenefitItem(
                    'A partnership with a well-respected and heavily followed media personality, Mike Rowe.'
                  )}
                </div>
                <div className="col-sm">
                  {this.getBenefitItem(
                    'Strategic alliances with stakeholders across the damage prevention space.'
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  {this.getBenefitItem(
                    '811 and damage prevention messaging delivered through a branded campaign to excavators across'
                    + ' the country.'
                  )}
                </div>
                <div className="col-sm">
                  {this.getBenefitItem(
                    'Ability to reinforce awareness and use of 811 with loyal users, capture interest with new'
                    + ' excavators and the general public.'
                  )}
                </div>
                <div className="col-sm">
                  {this.getBenefitItem(
                    'Long term cost savings with a far broader reach.'
                  )}
                </div>
              </div>
            </div>
          </div>

          <div id="help-row" className="main-row row-even row">
            <div className="col">
              <div className="help-title-wrapper">
                <h2 className="h1 nei-h">How You Can Help</h2>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    We are seeking support from pipeline companies, utilities, 811 call centers and others who
                    support the damage prevention community – Anyone with an interest in safe digging.
                  </p>
                  <p className="help-bold">
                    In order to see more, and for the National Excavator Initiative to continue, we need additional
                    sponsors as well as your financial support!
                  </p>
                </div>
                <div className="col">
                  <p>
                    Already participating? – Let others in the industry know: pipeline companies, utilities,
                    811 call centers – Anyone with an interest in safe digging.
                  </p>
                  <p>
                    <Link to={contactRoute} className="btn btn-primary btn-lg">Registration Form</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BenefitsPage.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
};

export default BenefitsPage;
