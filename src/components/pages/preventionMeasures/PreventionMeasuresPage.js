import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './preventionMeasuresPage.scss';

/**
 * The PreventionMeasuresPage component.
 *
 * @constructor
 */
export class PreventionMeasuresPage extends React.Component {
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
      <div id="prevention-measures-page" className="system-page">
        <PageTitle title="Prevention"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <h1 className="h3 nei-h">Prevention Measures Protecting Underground Infrastructure</h1>
              <p>The time and investment necessary to protect the operational performance and
                integrity of underground infrastructure is similar to a homeowner wanting to
                protect and maintain the value associated with their home.</p>

              <p>The following list highlights proactive, voluntary steps taken by pipeline
                operators before, during and after construction to ensure reliability and
                integrity of the systems.</p>
              <h5>Advance Planning</h5>
              <ul>
                <li>Designing the strength and thickness of steel or plastic to meet or exceed
                  industry standards</li>
                <li>Coating pipelines with a protective covering to prevent damage
                </li>
                <li>Injecting corrosion inhibitors and installing cathodic protection (low
                  voltage currant that runs across pipeline) to safeguard steel from corrosion
                </li>
                <li>Evaluating risks posed to underground assets under different operating
                  conditions</li>
              </ul>

              <h5>During Construction</h5>
              <ul>
                <li>Burying pipe at minimum depths depending on type and location of the line</li>
                <li>Examining (through X-rays) the welds of pipe connections to look for signs
                  of defects or cracks</li>
                <li>Testing to confirm integrity before assets become operational</li>
                <li>Placing pipeline markers at regular intervals aboveground to visually
                  indicate their underground presence
                </li>
              </ul>

              <h5>Maintenance &amp; Ongoing Efforts</h5>
              <ul>
                <li>Maintaining a clear right of way for regular inspections (by air or on foot)
                  to check for signs of a leak, obstruction or encroachment
                  <ol>
                    <li>Marking where pipelines cross roads, waterways and railroad tracks</li>
                  </ol></li>
                  <li>Monitoring the pressure and flow of product being transported</li>
                  <li>Training emergency responders on how to recognize problems (for example, a
                    potential product release) and on proper response
                  </li>
                  <li>Offering public awareness education to impacted audiences</li>
                  <li>Adding an odorant with a distinctive smell (typically like rotten eggs or a
                    burnt match) to consumer-ready gas distribution systems to help recognize leaks</li>
                  <li>Providing training opportunities so employees meet minimum qualification
                    standards</li>
                  <li>Preparing and practicing emergency response procedures (training drills)</li>
                  <li>Participating in the state one call notification programs (811) and
                    promoting “Call Before You Dig” messaging so underground facilities are marked
                    before digging</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        ); } } PreventionMeasuresPage.propTypes = {};

      export default PreventionMeasuresPage;