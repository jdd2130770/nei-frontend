import PropTypes from 'prop-types';
import React from 'react';

import config from '../../../config/main';
import Link from '../../common/link/Link';
import StateHeader from '../../common/stateHeader/StateHeader';
import StateSideNav from '../../common/stateSideNav/StateSideNav';
import stateResourceGetByIdHoc from '../../hoc/stateResourceGetByIdHoc';
import {stateResourceRoute, stateResourcesRoute} from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './stateResourcePage.scss';

/**
 * The StateResourcePage component.
 *
 * @constructor
 */
export class StateResourcePage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);

    this.state = {
      invalidItem: false,
    };
  }

  /**
   * Triggers before the component is added to the page.
   */
  componentWillMount() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateResourceRoute);

    if (!params.resourceId) {
      this.setState({
        invalidItem: true,
      });
      return;
    }

    this.props.stateResourceGetByIdHoc.getResource(params.resourceId);
  }

  /**
   * Parses the contact details into a simple array.
   *
   * @returns {Array.<{label: string, value: string}>}
   */
  parseContactDetails = () => {
    if (!this.props.stateResourceGetByIdHoc.resource) {
      return [];
    }

    const data = this.props.stateResourceGetByIdHoc.resource;

    let contactDetails = [];
    if (data.website) {
      contactDetails.push({label: 'Website', value: (
        <a href={data.website} target="_blank">{data.website}</a>
      )});
    }
    if (data.contactNameOptional) {
      contactDetails.push({label: 'Contact Name', value: data.contactNameOptional});
    }
    if (data.contactEmailOptional) {
      contactDetails.push({label: 'Contact Email', value: (
        <a href={`mailto:${data.contactEmailOptional}`} target="_blank">{data.contactEmailOptional}</a>
      )});
    }
    if (data.contactNumberOptional) {
      contactDetails.push({label: 'Contact Number', value: (
        <a href={`tel:${data.contactNumberOptional}`} target="_blank">{data.contactNumberOptional}</a>
      )});
    }

    return contactDetails;
  };

  /**
   * Parses the additional contact numbers into a simple array.
   *
   * @returns {Array.<{label: string, value: string}>}
   */
  parseContactNumbers = () => {
    if (!this.props.stateResourceGetByIdHoc.resource) {
      return [];
    }

    const data = this.props.stateResourceGetByIdHoc.resource;

    let contactDetails = [];
    if (data.generalContactNumber) {
      contactDetails.push({label: 'General Number', value: (
        <a href={`tel:${data.generalContactNumber}`} target="_blank">{data.generalContactNumber}</a>
      )});
    }
    if (data.twentyFourHourEmergencyNumber) {
      contactDetails.push({label: '24-Hour Emergency Hotline', value: (
        <a href={`tel:${data.twentyFourHourEmergencyNumber}`} target="_blank">{data.twentyFourHourEmergencyNumber}</a>
      )});
    }
    if (data.otherContactNumberPleaseSpecify) {
      contactDetails.push({
        label: 'Other Contact Number', value: (
          <a href={`tel:${data.otherContactNumberPleaseSpecify}`} target="_blank">
            {data.otherContactNumberPleaseSpecify}
          </a>
        )
      });
    }

    return contactDetails;
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateResourceRoute);

    const isLoading = this.props.stateResourceGetByIdHoc.isLoading || false;
    const error = this.props.stateResourceGetByIdHoc.error || null;
    const stateData = this.props.stateResourceGetByIdHoc.stateInfo || null;
    const resourceData = this.props.stateResourceGetByIdHoc.resource || null;

    const hasError = (error || this.state.invalidItem) || null;

    const contactDetails = this.parseContactDetails();
    const contactNumbers = this.parseContactNumbers();

    return (
      <div id="state-resource-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading} />

          <div id="primary-row" className="main-row row">
            <div className="col-md-4">
              <StateSideNav
                stateAbbreviation={params.state}
                location={this.props.location}
                urlParams={params}
              />
            </div>
            <div className="col">
              <div id="back-row" className="row">
                <div className="col">
                  <Link className="back-link" to={stateResourcesRoute} params={params}>
                    <i className="fa fa-chevron-left" /> Back to Resources
                  </Link>
                </div>
              </div>

              <div id="title-row" className="row">
                <div className="col">
                  <h1 className="h5 resource-title">{resourceData ? resourceData.entityName : 'Loading...'}</h1>
                </div>
              </div>

              {(resourceData && resourceData.logo) && (
                <div id="logo-row" className="row">
                  <div className="col">
                    <img
                      className="logo-img"
                      src={`${config.server.imageUrlDomain}${resourceData.logo.url}`}
                      title="logo"
                    />
                  </div>
                </div>
              )}

              {(!isLoading && hasError) && (
                <div id="missing-row" className="row">
                  <div className="col">
                    <div className="alert alert-warning">
                      The resource information could not be loaded.
                    </div>
                  </div>
                </div>
              )}

              {(!isLoading && !hasError && resourceData) && (
                <span>
                  <div id="address-row" className="row">
                    <div className="col">
                      <h2 className="h4">Address Info</h2>
                      <div className="address">
                        {resourceData.address && (
                          <div>{resourceData.address}</div>
                        )}

                        {(resourceData.city || resourceData.zip || stateData.abbreviation) && (
                          <div>
                            {(resourceData.city) && (
                              <span>{resourceData.city}</span>
                            )}

                            {(resourceData.city && (stateData.abbreviation || resourceData.zip)) && (
                              <span>,&nbsp;</span>
                            )}

                            {(stateData.abbreviation) && (
                              <span>{stateData.abbreviation}</span>
                            )}

                            {(resourceData.zip && (stateData.abbreviation || resourceData.city)) && (
                              <span>&nbsp;</span>
                            )}

                            {(resourceData.zip) && (
                              <span>{resourceData.zip}</span>
                            )}
                          </div>
                        )}
                      </div>

                      <hr />
                    </div>
                  </div>

                  <div id="contact-details-row" className="row">
                    <div className="col">
                      <h2 className="h4">Contact Details</h2>
                      <div className="contact-details">
                        {contactDetails.map((contactDetail, index) => {
                          return (
                            <div className="contact-detail" key={index}>
                              <span className="detail-name">{contactDetail.label}:</span>
                              <span className="detail-value">{contactDetail.value}</span>
                            </div>
                          );
                        })}
                      </div>

                      <hr />
                    </div>
                  </div>

                  <div id="contact-numbers-row" className="row">
                    <div className="col">
                      <h2 className="h4">Additional Contact Numbers</h2>
                      <div className="contact-numbers">
                        {contactNumbers.map((contactNumber, index) => {
                          return (
                            <div className="contact-number" key={index}>
                              <span className="number-name">{contactNumber.label}:</span>
                              <span className="number-value">{contactNumber.value}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StateResourcePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  stateResourceGetByIdHoc: PropTypes.shape({
    getResource: PropTypes.func,
    isLoading: PropTypes.bool,
    resource: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    stateInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default stateResourceGetByIdHoc(
  StateResourcePage
);
