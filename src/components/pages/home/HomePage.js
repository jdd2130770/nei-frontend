import React from 'react';
import { Link } from 'react-router-dom';

import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';


import { sponsorshipOptionsRoute, contactRoute } from '../../routePaths';

import './homePage.scss';

/**
 * The HomePage component.
 *
 * @constructor
 */
export class HomePage extends React.Component {
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
      <div id="home-page" className="system-page">
        <div className="container">
          <div className="row header-steps">
            <div className="col-lg-4">
              <div className="header-step">
                <div className="circular-step-number">1</div>
                <div className="step-content">Power that turns the lights on when a switch is flipped.</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-step">
                <div className="circular-step-number">2</div>
                <div className="step-content">Pipes that carry our water and energy resources to heat and cool our homes.</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-step">
                <div className="circular-step-number">3</div>
                <div className="step-content">Wires that transmit phone, cable, and digital information that allow instant communication with the outside world.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-page-quote-container">
                <div className="center-page-quote">
                  Raising awareness of the critically important program 811.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="read-more-callout">
                  <div className="read-more-callout-header">811 Overview of Safety and Regulations</div>
                  <div className="read-more-callout-content">{
                    `We invite you to learn more about the infrastructure that
                    is all around you, the safety steps necessary protect it,
                    and the men and women who work incredibly hard to build, install
                    and maintain those systems.`
                  }</div>
                  <button className="btn read-more-callout-button">Read More</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-8 position-static">
                <div className="preparation-callout">
                  <div className="preparation-callout-header">Preparation</div>
                  <div className="preparation-callout-body mb-4">{
                    `The "Call (811) Before You Dig" program, or 811, is
                    the first step in identifying underground facilities
                    and the subsequent steps necessary to protect buried
                    infrastructure as well as those who make their living
                    by digging, working or living near the buried facilities.`
                  }</div>
                </div>
                <div className="offset-images d-none d-md-block">
                  <div className="offset-img-1-container">
                    <img className="offset-img-1" src={image1} />
                  </div>
                  <div className="offset-img-3-container">
                    <img className="offset-img-3" src={image3} />
                  </div>
                </div>
                {/* <div className="row excavator-images-row-1 hidden-md-down">
                  <div className="col-lg-12">
                    <div className="excavator-images">
                      <div className="excavator-img-1-container">
                        <img className="excavator-img-1" src={image1} />
                      </div>
                      <div className="excavator-img-3-container">
                        <img className="excavator-img-3" src={image3} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row excavator-images-row-1 hidden-sm-down hidden-md-up">
                  <div className="col-lg-12">
                    <div className="excavator-images">
                      <div className="excavator-img-1-container">
                        <img className="excavator-img-1" src={image1} />
                      </div>
                      <div className="excavator-img-3-container">
                        <img className="excavator-img-3" src={image3} />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row excavator-images-row-2">
            <div className="excavator-images d-none d-md-block">
              <div className="excavator-img-3-container">
                <img className="excavator-img-3" src={image2} />
              </div>
            </div>
          </div>
          <div className="row green-footer-row">
            <div className="col-lg-6 offset-lg-4 col-sm-8 offset-sm-2">
              <div className="be-prepared-callout  ">
                <div className="be-prepared-callout-header">Be Prepared</div>
                <div className="be-prepared-callout-content">{`
                  Remember to contact 811 two to three business days
                  before starting projects that involve digging – and
                  that this needs to happen every time - not just sometimes.
                `}</div>
                <div className="be-prepared-callout-footer">
                  <button className="btn read-more-callout-button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
