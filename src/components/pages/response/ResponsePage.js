import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './responsePage.scss';

/**
 * The ResponsePage component.
 *
 * @constructor
 */
export class ResponsePage extends React.Component {
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
      <div id="response-page" className="system-page">
        <PageTitle title="Response"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <h1 className="h3 nei-h">If you suspect a pipeline release:</h1>
              <div>
                <h2 className="h3">DO</h2>
                <ul><li>Turn off and abandon any equipment.</li>
                  <li>Leave the area on foot in an upwind or crosswind direction.</li>
                  <li>When in a safe location, call 911 and then the pipeline operator.</li>
                  <li>Warn others to stay away.</li>
                  <li>Wait for emergency responders to arrive in a safe, upwind/crosswind location.</li></ul>
              </div>
              <div>
                <h2 className="h3">DO NOT</h2>
                <ul><li>Use a cell or landline phone until you reach a safe, upwind or crosswind location.</li>
                  <li>Start a vehicle or drive into the leak while leaving the area.</li>
                  <li>Light a cigarette or create any other source of ignition</li>
                  <li>Attempt to turn any pipeline valves</li>
                  <li>Touch any escaping liquid or gas</li>
                  <li>Try to extinguish or control a fire</li></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResponsePage.propTypes = {};

export default ResponsePage;
