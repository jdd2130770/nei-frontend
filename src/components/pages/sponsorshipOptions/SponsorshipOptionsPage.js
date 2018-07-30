import React from 'react';
import {Link} from 'react-router-dom';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import {contactRoute} from '../../routePaths';

import whitePaperUrl from './assets/WhitePaper-NEI.pdf';

import './sponsorshipOptionsPage.scss';

/**
 * The SponsorshipOptionsPage component.
 *
 * @constructor
 */
export class SponsorshipOptionsPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }
  
  /**
   * Gets the element for a contribution level item.
   *
   * @param {string} levelName
   * @param {string} levelAmount
   * @param {Array.<string[]|string>} benefits
   * @returns {{}}
   */
  getContributionLevelItem = (levelName, levelAmount, benefits) => {
    return (
      <div className="contribution-level-item">
        <div className="row">
          <div className="col-4">
            <div className="level-name">{levelName} Level</div>
            <div className="level-amount">${levelAmount}+</div>
          </div>
          <div className="col">
            <ul className="benefits-list">
              {benefits.map((benefit, benefitIndex) => {
                if (Array.isArray(benefit)) {
                  return (
                    <ul className="benefits-sub-list" key={benefitIndex}>
                      {benefit.map((subBenefit, subBenefitIndex) => {
                        return (
                          <li className="sub-benefit-item" key={subBenefitIndex}>{subBenefit}</li>
                        );
                      })}
                    </ul>
                  );
                }
                
                return (
                  <li className="benefit-item" key={benefitIndex}>{benefit}</li>
                );
              })}
            </ul>
            <div className="credit-statement">
              Credit for supplemental efforts: documentation confirming your support and report of outreach activities
            </div>
          </div>
        </div>

        <hr />
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
      <div id="sponsorship-options-page" className="system-page">
        <PageTitle title="Sponsorship Options"/>
        <div className="container-fluid">
          <div id="white-paper-row" className="main-row row-odd row">
            <div className="col">
              <div>
                <a
                  href={whitePaperUrl}
                  className="h1 nei-h white-paper-link"
                  target="_blank"
                >Please read our white paper</a>
              </div>
            </div>
          </div>
          <div id="contribution-row" className="main-row row-even row">
            <div className="col">
              <h1 className="nei-h support-header">
                There are two ways to support the National Excavator Initiative.
              </h1>
              <h2 className="h1 nei-h support-item-header">1. Annual Contribution</h2>
              <hr />
              <p>
                Funds will be used to develop and support outreach to the excavation community. If your company
                simply wants to support the National Excavator Initiative the following packages are available.
              </p>

              {this.getContributionLevelItem('Shovel', '500', [
                'Company listing (contact info. included on website and app)',
                'Ability to use web banners for your 811 promotional efforts'
              ])}

              {this.getContributionLevelItem('Skid Steer', '10,000', [
                'Ability to brand one of the following with your company logo:',
                ['State-specific brochure or', 'PSA*'],
                'Access and ability to use web banners for your 811 promotional efforts',
                'Company listing (contact info. included on website and app)'
              ])}

              {this.getContributionLevelItem('Backhoe', '25,000', [
                'Access to all campaign materials',
                'Ability to brand one of the following with your company logo:',
                ['State-specific brochure or', 'PSA*'],
                'Access and ability to use web banners for your 811 promotional efforts',
                'Company listing (contact info. included on website and app)'
              ])}

              {this.getContributionLevelItem('Trencher', '50,000', [
                'Position on the NEI Advisory Committee',
                'Access to all campaign materials',
                'Ability to brand one of the following with your company logo:',
                ['State-specific brochure or', 'PSA*'],
                'Access and ability to use web banners for your 811 promotional efforts',
                'Company listing (contact info. included on website and app)'
              ])}

              {this.getContributionLevelItem('Bulldozer', '75,000', [
                'Access and ability to place corporate or organization logo on all campaign materials*',
                'Position on the NEI Advisory Committee',
                'Access and ability to use web banners for your 811 promotional efforts',
                'Company listing (contact info. included on website and app)'
              ])}

              <span className="bottom-note">
                *Adding a company or organization’s branding to a PSA will incur additional costs to that entity.
              </span>
            </div>
          </div>

          <div id="compliance-row" className="main-row row-odd row">
            <div className="col">
              <h2 className="h1 nei-h support-item-header">2. For Compliance</h2>
              <hr />
              <div className="row">
                <div className="col">
                  <p>
                    Pipeline operators can use this initiative as a compliance program for their RP 1162 and
                    public awareness requirements. The program has been developed in a manner that will not
                    only meet, but exceed the minimum requirements for excavators. Supporting entities
                    participating at this level will receive an extensive compliance package including:
                  </p>
                  <p>
                    <ul>
                      <li>Copies of all campaign materials</li>
                      <li>Mailing lists</li>
                      <li>Postage reports</li>
                      <li>Focus group feedback</li>
                      <li>Pre-and-post phone survey outcomes</li>
                      <li>List of outreach activities</li>
                      <li>Scope and impression highlights/metrics</li>
                    </ul>
                  </p>
                  <p>
                    For more information on using the National Excavator Initiative as your compliance program,
                    please contact us directly. Levels of support depend on the size of your organization and
                    desired materials, but are designed to provide more outreach at a reduced costs compared
                    to that of your current compliance activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="join-us-row" className="main-row row-even row">
            <div className="col">
              <div className="help-title-wrapper">
                <h2 className="h1 nei-h">Join Us</h2>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    Consider joining us in the quest to dig safely and save lives. If you’re ready to join, you
                    can get started right now.
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

SponsorshipOptionsPage.propTypes = {};

export default SponsorshipOptionsPage;
