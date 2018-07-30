import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './factsAndStatsPage.scss';

/**
 * The FactsAndStatsPage component.
 *
 * @constructor
 */
export class FactsAndStatsPage extends React.Component {
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
      <div id="facts-and-stats-page" className="system-page">
        <PageTitle title="Facts and Stats"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <h5>WHY SPREAD THE WORD ABOUT 811?
              </h5>
              <ul>
                <li>811 awareness among excavators has been relatively static. Since 2009, the
                  percentage of excavators calling 811 before starting work has stayed at roughly
                  31 percent. (<a href="http://commongroundalliance.com/sites/default/files/publications/DIRT_Analysis_and_Recommendations_2015_Report_Final.pdf" target='_blank'>Common Ground Alliance’s 2015 DIRT Report.</a>)</li>

                <li>Both housing permits and construction spending have increased by 15 percent
                  and 4 percent, these are the leading cause of excavation damages according to
                  voluntary reporting. (<a href="http://commongroundalliance.com/sites/default/files/publications/DIRT_Analysis_and_Recommendations_2015_Report_Final.pdf" target='_blank'>Common Ground Alliance’s 2015 DIRT Report.</a>)</li>

                <li>Overhead power lines are also a hazard. Contacting 811 will alert electrical
                  utilities so conversations can take place regarding the dangers of overhead
                  power lines. (<a href="http://www.excavationsafetyguide.com/current_issue.php" target='_blank'>2017 Excavation Safety Guide</a> – See Pg. 27)
                </li>

                <li>Since 2005, excavation damage has been attributed to causing 787 pipeline
                  incidents, resulting in at least 37 fatalities, 150 injuries and $260 million in
                  property damage.” (<a href="http://mlgpa.pipelineawareness.org/wp-content/uploads/2016/06/2016-Excavation-Safety-Guide-Pipeline-Edition.pdf" target='_blank'>2016 Excavation Safety Guide</a> – See Pg. 40)</li>

                <li>In May of 2015, former Transportation Secretary, Anthony Foxx, stated in
                  PHMSA Issues Pipeline Damage Prevention Programs Final Rule, that: “Excavation
                  damage is a leading cause of serious pipeline incidents that cause death,
                  injuries and property damage.” (Pipeline and Hazardous Materials Safety
                  Administration (PHMSA) <a href="http://www.phmsa.dot.gov/pipeline/phmsa-issues-pipeline-damage-prevention-programs-final-rule" target='_blank'>News Release: “PHMSA Issues Pipeline Damage Prevention
                  Programs Final Rule</a> July, 13, 2015)
                </li>

                <li>99 percent of the time, damages can be prevented by contacting 811 before
                  you dig. (<a href="http://commongroundalliance.com/sites/default/files/publications/DIRT_Analysis_and_Recommendations_2015_Report_Final.pdf" target='_blank'>Common Ground Alliance’s 2015 DIRT Report.</a>)</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

FactsAndStatsPage.propTypes = {};

export default FactsAndStatsPage;
