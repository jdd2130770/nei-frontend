import jQuery from 'jquery';
import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './leakRecognitionPage.scss';

/**
 * The LeakRecognitionPage component.
 *
 * @constructor
 */
export class LeakRecognitionPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }
  
  /**
   * Fires just after the component mounts to the page.
   */
  componentDidMount() {
    this.initTooltips();
  }
  
  /**
   * Inits the auto tooltips.
   */
  initTooltips = () => {
    jQuery('[data-toggle="tooltip"]').tooltip();
  };
  
  /**
   * Gets the table header.
   *
   * @returns {{}}
   */
  getHeader = () => {
    return (
      <thead>
        <tr>
          <th width="20%">&nbsp;</th>
          <th>
            <a
              className="tooltip-header"
              data-toggle="tooltip"
              title="Petroleum Liquids are crude oil, gasoline, diesel fuel, jet fuel, aviation
              gasoline, kerosene and other refined products."
              data-placement="top"
            >Petroleum Liquids</a>
          </th>
          <th>Natural Gas</th>
          <th>
            <a
              className="tooltip-header"
              data-toggle="tooltip"
              title="Highly Volatile Liquids include natural gas liquids, such as
              propane, butane, ethylene and condensates."
              data-placement="top"
            >Highly Volatile Liquids (HVL)</a>
          </th>
          <th>
            <a
              className="tooltip-header"
              data-toggle="tooltip"
              title="Carbon Dioxide is a naturally occurring, odorless and tasteless gas that
              can be transported in either a gas or liquid state."
              data-placement="top"
            >Carbon Dioxide (CO2)</a>
          </th>
          <th>Anhydrous Ammonia
          </th>
          <th>Hydrogen Gas</th>
        </tr>
      </thead>
    );
  };
  
  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    return (
      <div id="leak-recognition-page" className="system-page">
        <PageTitle title="Leak Recognition"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <p>
                Pipelines are often thought of as the invisible highway. They are buried and
                often out of sight and out of the minds of those who work, live and congregate
                around them. Yet they can pose a threat if their integrity is compromised.
                Unplanned releases are rare due to measures taken by pipeline companies to
                prevent pipeline leaks. The consequences of a pipeline release will vary
                depending on the product being transported, the amount of product released and
                the area where the incident occurs.
              </p>

              <p>
                Be aware that some pipelines transport products that may be harmful if
                inhaled, may cause eye and skin irritation or may result in difficulty
                breathing. You should be aware of health hazards and potentially flammable or
                explosive conditions or situations that may result in injury or loss of life.
              </p>

              <p>
                An uncontrolled release of natural gas, natural gas liquids or highly
                volatile liquids can lead to a fire or explosion. A release of crude oil or
                refined products can also result in environmental damage or water contamination.
              </p>

              <p>
                To report any suspicious activity, please contact your local pipeline
                operator and/or 911.
              </p>

              <table className="table table-hover table-responsive">
                {this.getHeader()}

                <thead>
                  <tr>
                    <th colSpan="8">
                      Do You See?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dead or discolored vegetation</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                    <td />
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Pooling of liquids on the ground</td>
                    <td>X</td>
                    <td />
                    <td>X</td>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td>Bubbling in pools of water</td>
                    <td />
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td>A white vapor cloud that may look like smoke
                    </td>
                    <td />
                    <td />
                    <td>X</td>
                    <td />
                    <td>X</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td>Dirt blowing from a hole in the ground</td>
                    <td />
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Fire coming out of or on top of the ground
                    </td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                    <td />
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td>An area of frozen ground in summer</td>
                    <td />
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td>An unusual area of melted snow in winter
                    </td>
                    <td />
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>

                {this.getHeader()}

                <thead>
                  <tr>
                    <th colSpan="8">
                      Do You Smell?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>An odor like petroleum liquids or gasoline
                    </td>
                    <td>X</td>
                    <td>*</td>
                    <td>X</td>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td>An odor like rotten eggs or a burnt match
                    </td>
                    <td />
                    <td>X*</td>
                    <td>X</td>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td>A pungent odor</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>X</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>

                {this.getHeader()}

                <thead>
                  <tr>
                    <th colSpan="8">
                      Do You Hear?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A hissing or whistling noise</td>
                    <td />
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td />
                  </tr>
                  <tr>
                    <td>A loud roaring sound like a jet engine
                    </td>
                    <td />
                    <td>X</td>
                    <td>X</td>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
              <p>
                <em>
                  * Natural gas is colorless and odorless in its purest state. Some operators
                  add mercaptan, an odor similar to rotten eggs, to some pipelines. Unprocessed
                  Natural Gas may also have a petroleum like odor.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeakRecognitionPage.propTypes = {};

export default LeakRecognitionPage;
