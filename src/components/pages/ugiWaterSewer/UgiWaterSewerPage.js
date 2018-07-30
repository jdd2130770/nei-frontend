import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './ugiWaterSewerPage.scss';

/**
 * The UgiWaterSewerPage component.
 *
 * @constructor
 */
export class UgiWaterSewerPage extends React.Component {
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
      <div id="ugi-water-sewer-page" className="system-page">
        <PageTitle title="Water & Sewer"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              
              <p>There are two types of water underground utilities: a water main and a sewer main. A <strong>water main</strong> is an underground pipe that delivers water to a customer’s service pipe. In residential areas, it typically runs under the street. A <strong>sewer main</strong> is the principal pipe in a sewage collection system. It is part of a larger sewer system that carries off liquid and solid sewage.</p> 

              <p>What isn’t as easy to see is that there are 1.2 million miles of underground water mains – that’s 26 miles of water mains for every mile of interstate highway! <em>(National Geographic.)</em> In addition, there are another 1.2 million miles of sewer lines buried beneath us. <em>(Environmental Protection Agency)</em>  </p>

              <h5>Source Links:</h5>
              <ul><li><a href="http://awwa.org/" target="_blank">awwa.org</a></li>
              <li><a href="http://apwa.org/" target="_blank">apwa.org</a></li></ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

UgiWaterSewerPage.propTypes = {};

export default UgiWaterSewerPage;
