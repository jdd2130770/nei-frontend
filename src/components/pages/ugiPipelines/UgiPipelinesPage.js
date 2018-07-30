import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './ugiPipelinesPage.scss';

/**
 * The UgiPipelinesPage component.
 *
 * @constructor
 */
export class UgiPipelinesPage extends React.Component {
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
      <div id="ugi-pipelines-page" className="system-page">
        <PageTitle title="Pipelines"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <p>An underground network of more than 2.6 million miles of plastic, composite, steel and cast iron, <strong>pipelines</strong> transport energy resources such as natural gas, crude oil and other refined products over long and short distance. Typically this is from areas of production to refining and storage centers to distribution points and end-users such as homes, businesses and other industrial users. Pipelines are the safest, most efficient and economical way of reliably transporting energy resources.</p>
              
              <h5>Types of Pipelines</h5>
              <p><strong>Gathering Pipelines:</strong> collect oil and gas from areas of production.</p>

              <p><strong>Transmission Pipelines:</strong> transport materials to and from storage, refining facilities, manufacturing centers and places of distribution.</p>

              <p><strong>Distribution Pipelines:</strong> deliver natural gas to people’s homes or businesses.</p>

              <h5>Source Links:</h5>
              <ul>
              <li><a href="http://www.aga.org" target="_blank">aga.org</a></li>
              <li><a href="http://www.api.org" target="_blank">api.org</a></li>
              <li><a href="http://www.apga.org" target="_blank">apga.org</a></li>
              <li><a href="http://www.aopl.org" target="_blank">aopl.org</a></li>
              <li><a href="http://www.ingaa.org" target="_blank">ingaa.org</a></li></ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

UgiPipelinesPage.propTypes = {};

export default UgiPipelinesPage;
