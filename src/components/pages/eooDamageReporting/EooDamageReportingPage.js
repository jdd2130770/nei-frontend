import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle'

import './eooDamageReportingPage.scss';

/**
 * The EooDamageReportingPage component.
 *
 * @constructor
 */
export class EooDamageReportingPage extends React.Component {
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
      <div id="eoo-damage-reporting-page" className="system-page">
        <PageTitle title="811 Damage Reporting"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">

              <p>Any damage to a buried facility must be reported.</p>

              <p>If an underground utility or pipeline is damaged in any way:</p>
              <ul><li>Immediately stop work and leave the scene</li>
                <li>Report it to the utility owner or pipeline operator</li></ul>

              <p>If a product release occurs:</p>
              <ul><li>First call 911 </li>
                <li>Next call the utility owner or pipeline operator</li></ul>

              <p>If you suspect a pipeline leak: </p>
              <ul><li>Leave the scene and then call 911 </li>
                <li>Next call the owner or operator from a safe distance away</li></ul>

              <p><strong>Reminder:</strong> Any damage, even if it appears to minor, including a gouge, scrape, dent or crease – could potentially affect integrity and produce a future pipeline leak or disruption in service. </p>

              <p>Consult state damage prevention laws for complete information.</p>

              <p>Additional calls and/or reporting may be required by your <strong>local regulatory agency</strong> as well as the <strong>local 811 notification center</strong>.</p>

              <p>Finally, to facilitate <strong>voluntary data collection reporting</strong> that is used to inform industry, consider submitting damage prevention and near-miss reports through a secure, private web application, Damage Information Reporting Tool (DIRT) at <a href="http://www.cga-dirt.com">www.cga-dirt.com</a>, which has been set up by the Common Ground Alliance.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EooDamageReportingPage.propTypes = {};

export default EooDamageReportingPage;
