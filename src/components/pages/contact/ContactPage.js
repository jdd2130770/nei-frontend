import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle'

import RegisterForm from './components/RegisterForm';

import './contactPage.scss';

/**
 * The ContactPage component.
 *
 * @constructor
 */
export class ContactPage extends React.Component {
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
      <div id="contact-page" className="system-page">
        <PageTitle title="Contact Us"/>
        <div className="container-fluid">
          <div id="registration-form-row" className="contact-row row-odd row">
            <section className="col register-column">
              <h1 className="h3 nei-h form-title">National Excavator Initiative Registration Form</h1>
              <RegisterForm />
            </section>
            <section className="col-sm-4 contact-column">
              <h1 className="h3 nei-h">Contact Us</h1>
              <div className="contact-person">
                <h2 className="h4 contact-name">Lindsay Sander</h2>
                <div className="contact-phone">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>713.208.0273</span>
                </div>
                <div className="contact-email">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <a href="mailto:LNS@SanderResources.com">LNS@SanderResources.com</a>
                </div>
              </div>
              <hr />
              <div className="about">
                <h2 className="h5 about-title">About The National Excavator Initiative</h2>
                <p className="about-text">
                  Founded in October 2016, the National Excavator Initiative is a new, first-of-its-kind
                  collaborative effort that strives to reach excavators and contractors with damage prevention
                  messages, especially the importance of contacting an 811 notification center before digging.
                  Members include utilities, oil and gas companies, one call centers across the country and other
                  supporting organizations with an interest in keeping excavators informed on how to dig safe.
                </p>

                <div>
                  Visit:&nbsp;
                  <a href="http://www.safeexcavator.com" target="_blank">www.safeexcavator.com</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

ContactPage.propTypes = {};

export default ContactPage;
