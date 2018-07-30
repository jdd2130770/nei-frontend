import React from 'react';
import { PageTitle } from '../../common/pageTitle/PageTitle';
import Link from '../../common/link/Link.js';
import * as routePaths from '../../routePaths.js';

import image1 from './assets/1.jpg';
import image3 from './assets/3.jpg';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';
import image7 from './assets/7.jpg';
import image8 from './assets/8.jpg';
import image9 from './assets/9.jpg';

import './eightOneOnePage.scss';

/**
 * The EightOneOnePage component.
 *
 * @constructor
 */
export class EightOneOnePage extends React.Component {
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
      <div id="eight-one-one-page" className="system-page">
        <div className="container">
          <PageTitle title="811 Overview" />
          <div className="row mt-5">
            <div className="col-sm-8 offset-sm-2 text-center">
              <p className="lead">
                Contacting 811 before digging is the single most critical action
                an excavator can take to help ensure their health and safety are
                protected, while at the same time preventing financial harm and
                environmental impact.
              </p>
            </div>
          </div>
          <div className="row height-calc about-811">
            <div className="col-md-6 offset-md-6">
              <h2>About 811:</h2>
              <p>{`811 is the national “Call Before You Dig” phone number
                (the option also exists to fill out an online form) to
                request to have underground lines marked using paint, flags
                or stakes. This call is generally free and required by law.`}</p>
            </div>
            <div className="excavator-images">
              <img
                src={image3}
                className="excavator-img-1"
              />
              <img
                src={image1}
                className="excavator-img-2"
              />
            </div>
          </div>
          <hr />
          <div className="row how-811-works-row mb-5">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center">How 811 Works:</h1>
              <p className="text-center">
                (for a more detailed excavation checklist, visit:{' '}
                <Link
                  to={routePaths.stateChecklistRoute}
                  params={{ state: 'al' }}
                >
                  the checklist
                </Link>)
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="step-container">
                <h5 className="step-number">Step 1</h5>
                <p className="step-description">
                  When someone contacts 811, he/she is connected to their local
                  one call center, where a representative collects information
                  about the caller’s planned excavation activity and location.{' '}
                </p>
              </div>
              <div className="step-container">
                <h5 className="step-number">Step 2</h5>
                <p className="step-description">
                  The one call center then communicates and coordinates this
                  information to operators of underground facilities in the
                  proposed excavation area.{' '}
                </p>
              </div>
              <div className="step-container">
                <h5 className="step-number">Step 3</h5>
                <p className="step-description">
                  Representatives of utilities and pipeline companies who have
                  underground facilities in the area will send a professional
                  locator out to identify and mark the location of their lines
                  or confirm that their facilities are not in the proposed
                  excavation area.{' '}
                </p>
              </div>
              <div className="step-container">
                <h5 className="step-number">Step 4</h5>
                <p className="step-description">
                  Proceed with care and in accordance with the requirements of
                  your state law.{' '}
                </p>
              </div>
              <div className="step-container">
                <h5 className="step-number">Step 5</h5>
                <p className="step-description">
                  Report any damage regardless of how minor.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p>These steps should include, but are not limited to:</p>
              <ul>
                <li>
                  Confirm the accuracy of the markings by hand-digging or vacuum
                  excavating the area to expose the facility
                </li>
                <li>Obey the tolerance zone limitations </li>
                <li>Make additional notification(s) to 811 if necessary</li>
              </ul>

              <hr />
              <p>
                Any damage to underground facilities (utilities or pipelines)
                may result in damage that could get worse over time and
                potentially result in a preventable failure of the facility.{' '}
              </p>

              <p>
                If you scratch, dent, scrape, crack, cut or cause damage of any
                type to a facility, contact the facility operator and 811.{' '}
              </p>
              <hr />

              <div className="product-release-callout">
                <p>If a product release occurs: </p>
                <ul>
                  <li>Immediately leave the area on foot </li>
                  <li>First call 911 </li>
                  <li>Next call the utility owner or pipeline operator </li>
                  <li>Then call 811</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="communication-row position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1 className="communication-header">Communication</h1>
                <p className="communication-description">
                  Always remember that contacting 811 is only the first step in
                  protecting you and underground facilities. Frequent
                  communication between an excavator and facility operator as well
                  as continued cooperation between all parties is an essential
                  part of the entire process of conducting a safe and successful
                  excavation.
                </p>
              </div>

              <div className="col-md-5 position-static d-none d-md-block">
                <div className="offset-images">
                  <div className="offset-image-container-1">
                    <img src={image6} alt="" />
                  </div>
                  <div className="offset-image-container-2">
                    <img src={image5} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              <h1 className="text-center">
                Understand what is considered Excavation:<br/>
                A sample of activities
              </h1>
            </div>
          </div>
          <div className="row excavation-example-row">
            <div className="col-lg-5 offset-lg-1 my-4">
              <div className="excavation-example-callout professional">
                <h5 className="text-center excavation-example-callout-header">
                  Professional Excavation
                </h5>
                <ul>
                  <li>Directional or trenchless drilling</li>
                  <li>Repairing plumbing or sewer lines</li>
                  <li>Road grading or ditch clearing</li>
                  <li>
                    Ag activities such as tilling and the instillation of drain
                    or field tiles
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 my-4">
              <div className="excavation-example-callout at-home">
                <h5 className="text-center excavation-example-callout-header">
                  Excavation at Home
                </h5>
                <ul>
                  <li>
                    Planting a garden or landscaping property – this includes
                    removing tree stumps or roots{' '}
                  </li>
                  <li>
                    Building or adding to a home or property including
                    installing a garage, barn, shed, deck, fence or mailbox
                  </li>
                  <li>Pouring a driveway or laying foundation</li>
                  <li>Digging trenches or a well</li>
                  <li>Adding a pool or sprinkler system</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1 text-center my-5">
              <p>
                Every digging project requires that you contact 811, even if you
                previously made contact for a similar project at the exact same
                location.
              </p>
            </div>
          </div>
        </div>

        <div className="why-call-row mt-5">
          <div className="container">
            <div className="row">
              <div className="excavator-images d-none d-md-block">
                <img
                  src={image9}
                  className="excavator-img-1"
                />
                <img
                  src={image8}
                  className="excavator-img-2"
                />
              </div>
              <div className="why-call-communication col-md-6 offset-md-5">
                <h1 className="why-call-header pt-5">Why contact 811 before you dig?</h1>
                <p className="why-call-description pb-5">
                  Most importantly: To get every worker back to his or her family
                  safe and injury free every single night.
                </p>
              </div>
            </div>
            <div className="row digging-consequences-images">
              <div className="col-xs-12">
                <div className="excavator-images">
                  <img
                    src={image7}
                    className="excavator-img-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div className="container">
          <div className="row digging-consequences">
            <div className="col-lg-6 offset-lg-1 col-md-7 left-col">
              <h2 className="mb-3">Contacting 811 before digging protects the following:</h2>
              <ul>
                <li>The surrounding population and property.</li>
                <li>The environment: land, water and wildlife.</li>
                <li>{`
                    Can help prevent massive utility service disruptions
                    to the community including: heat, electricity, water,
                    cable and telecom.
                  `}</li>
                <li>{`
                    Underground infrastructure. Even small, and seemingly
                    inconsequential dents, scrapes or hits from digging can
                    lead to corrosion, which can potentially lead to future leaks.
                  `}</li>
                <li>{`
                    Safe digging ensures your personal safety, the safety of
                    the local community, the environment as well as your
                    pocketbook and business.
                  `}</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-5 right-col bottom-col">
              <div className="digging-consequences-callout">
                <h4 className="mb-4">Potential consequences of hitting underground infrastructure</h4>
                <ul>
                  <li>Risk of injury, electrocution or death</li>
                  <li>Fire, explosion etc.</li>
                  <li>Loss of service</li>
                  <li>Product clean up</li>
                  <li>Environmental damage</li>
                  <li>Potential fines and penalties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EightOneOnePage.propTypes = {};

export default EightOneOnePage;
