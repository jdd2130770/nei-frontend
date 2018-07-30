import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './ugiCommunicationsPage.scss';

/**
 * The UgiCommunicationsPage component.
 *
 * @constructor
 */
export class UgiCommunicationsPage extends React.Component {
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
      <div id="ugi-communications-page" className="system-page">
        <PageTitle title="Communications"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <p>Telecommunications, broadband and fiber optics refer to a variety of methods used to transmit voice, data and video transmission over wires or cables. <strong>Telecommunications</strong> is a broad term, and includes a variety of technologies, such as telephones (wired and wireless), microwave, radio and TV broadcasting, the Internet and telegraphs. Currently, there are an estimated 150,000 cell towers in the United States <em>(Cellular Telecommunications Industry Association – CTIA)</em>. </p>
              
              <p><strong>Broadband</strong> is a transmission of data in which a wide band of frequencies is available. As a result, information can be multiplexed and sent on many different frequencies or channels within the band at the same time, allowing more information to be transmitted at any given time. This data can be sent through coaxial cable, fiber optic, radio or twisted pair. </p>
              
              <p>What isn’t as easy to see is the 400,000 miles of buried fiber optic cables, enough to circle the globe 16 times! <em>(National Cable and Telecommunications Association – NTCA). </em>  </p>

              <h5>Source Links:</h5>
              <ul><li><a href="http://ctia.org/" target="_blank">ctia.org</a></li>
              <li><a href="http://itta.us" target="_blank">itta.us</a></li>
              <li><a href="http://ncta.com/" target="_blank">ncta.com</a></li>
              <li><a href="http://fiberbroadband.org" target="_blank">fiberbroadband.org</a></li>
              <li><a href="http://ntca.org/" target="_blank">ntca.org</a></li>
              <li><a href="http://ustelecom.org/" target="_blank">ustelecom.org</a></li></ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

UgiCommunicationsPage.propTypes = {};

export default UgiCommunicationsPage;
