import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './ugiElectricityPage.scss';

/**
 * The UgiElectricityPage component.
 *
 * @constructor
 */
export class UgiElectricityPage extends React.Component {
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
      <div id="ugi-electricity-page" className="system-page">
        <PageTitle title="Electricity"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <p><strong>Electricity</strong> is generated at power plants, and moves through a grid of substations, transformers and power lines that connect electric companies to consumers (residential and commercial). Most local grids are interconnected, and form larger networks that help to plan and coordinate electricity supply. The United States has three main interconnected systems. Some utility companies generate all of the electricity that they sell, while other utility companies purchase from other utilities or independent power producers. The vast majority of power lines are aerial (overhead), but "undergrounding" is becoming more popular, especially in urban areas, with lines being buried underground.</p>
              
              <p>What isn’t as easy to see is the 200,000+ miles of high-voltage power lines, which is enough to wrap around the earth more than eight times! <em>(Institute of Energy Research.)</em> Not to mention, there are another 5.5 million miles of distribution lines in the U.S. <em>(Scientific American.)</em>  </p>
            
              <h5>Source Links:</h5>
              <ul><li><a href="http://eei.org/" target="_blank">eei.org</a></li></ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

UgiElectricityPage.propTypes = {};

export default UgiElectricityPage;
