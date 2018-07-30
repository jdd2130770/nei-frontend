import lodash from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import {contactRoute} from '../../routePaths';

import './supportingCompaniesPage.scss';

import joinImage1 from './assets/nei-join1.jpg';
import joinImage2 from './assets/nei-join2.jpg';

/**
 * The SupportingCompaniesPage component.
 *
 * @constructor
 */
export class SupportingCompaniesPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }
  
  /**
   * Gets the element for a benefit item.
   *
   * @param {string} benefitText
   * @returns {{}}
   */
  getBenefitItem = (benefitText) => {
    return (
      <div className="benefit-item">
        <div className="benefit-item-icon">
          <div className="icon-circle-outer">
            <div className="icon-circle-inner">
              <i className="icon-circle fa fa-check" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="benefit-item-label">{benefitText}</div>
      </div>
    );
  };
  
  /**
   * Gets the column lists of companies.
   *
   * @param {Array.<{}>} companies
   * @param {number} columns
   * @returns {Array.<Array.<{}>>}
   */
  getCompanyColumns = (companies, columns) => {
    if (!companies || !companies.length || !Array.isArray(companies)) {
      return [];
    }
    
    const columnCount = parseInt(columns, 10) || 2;
    const totalCount = companies.length;
    
    let countPerColumn = Math.floor(totalCount / columnCount);
    if (totalCount - (countPerColumn * columnCount)) {
      countPerColumn += 1;
    }
    
    return lodash.chunk(companies, countPerColumn);
  };
  
  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const companyColumns = this.getCompanyColumns([
      {name: 'Air Products and Chemicals, Inc.'},
      {name: 'Alliant Energy Corporation'},
      {name: 'Alta Mesa Holdings, LP'},
      {name: 'Atmos Energy Corporation'},
      {name: 'Azure Midstream'},
      {name: 'Bluestone'},
      {name: 'Buckeye Partners, L.P.'},
      {name: 'Cantera'},
      {name: 'CPS Energy'},
      {name: 'Colorado 811'},
      {name: 'Crestwood Midstream Partners LP'},
      {name: 'Crimson Pipeline, LLC'},
      {name: 'Distribution Contractors Association'},
      {name: 'DCP Midstream Partners, LP'},
      {name: 'Dominion Energy Ohio'},
      {name: 'Duke Energy'},
      {name: 'Enable Midstream Partners'},
      {name: 'Enlink Midstream Partners, LP'},
      {name: 'EOG Resources, Inc.'},
      {name: 'ExxonMobil Pipeline Company'},
      {name: 'Georgia Pacific – Camas'},
      {name: 'Indiana Utility Regulatory Commission'},
      {name: 'Interstate Energy Company'},
      {name: 'Iowa Pipeline Association'},
      {name: 'Kinder Morgan, Inc.'},
      {name: 'Legacy Reserves'},
      {name: 'Lonestar811'},
      {name: 'Magellan Midstream'},
      {name: 'Marathon Pipe Line, LLC'},
      {name: 'Markwest Energy'},
      {name: 'Minnesota Utility Contractors Association'},
      {name: 'M3 Midstream LLC (Momentum)'},
      {name: 'NuStar Energy, L.P.'},
      {name: 'ONEOK'},
      {name: 'Paiute Pipeline'},
      {name: 'Pipeline Technology'},
      {name: 'Portland General Electric (KB Pipeline)'},
      {name: 'Plains All American Pipeline, L.P.'},
      {name: 'San Diego Gas & Electric'},
      {name: 'SEMGroup Corporation'},
      {name: 'SoCal Gas'},
      {name: 'Southcross Energy Partners, L.P.'},
      {name: 'Southwest Gas Corporation'},
      {name: 'Stagecoach'},
      {name: 'TECO Energy Inc.'},
      {name: 'Texas811'},
      {name: 'Texas Water Infrastructure Network'},
      {name: 'UGI Utilities, Inc.'},
      {name: 'UGIES'},
      {name: 'WSB & Associates, Inc.'},
      {name: 'Xcel Energy Inc.'},
    ], 2);
    
    return (
      <div id="supporting-companies-page" className="system-page">
        <PageTitle title="Supporting Companies"/>
        <div className="container-fluid">
          <div id="companies-row" className="main-row row-odd row">
            <div className="col">
              <div className="headers-wrapper">
                <h1 className="nei-h">Join The National Excavator Initiative!</h1>
                <h2 className="h4 nei-h">Take a look at companies who are already on board:</h2>
              </div>
              <div className="row">
                <div className="col-sm">
                  <img className="join-image" src={joinImage1} />
                  <img className="join-image" src={joinImage2} />
                </div>

                {companyColumns.map((companies, columnIndex) => {
                  return (
                    <div className="col-sm" key={columnIndex}>
                      <ul className="company-items">
                        {companies.map((company, companyIndex) => {
                          return (
                            <li className="company-item" key={companyIndex}>
                              <span>{company.name}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
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

SupportingCompaniesPage.propTypes = {};

export default SupportingCompaniesPage;
