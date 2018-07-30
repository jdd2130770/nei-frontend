import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from '../../common/link/Link';

import StateHeader from '../../common/stateHeader/StateHeader';
import StateSideNav from '../../common/stateSideNav/StateSideNav';
import statesGetLocateRequestHoc from '../../hoc/statesGetLocateRequestHoc';
import {stateLocateRequestRoute} from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './stateLocateRequestPage.scss';

/**
 * The StateLocateRequestPage component.
 *
 * @constructor
 */
export class StateLocateRequestPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);

    this.state = {
      invalidState: false,
    };
  }

  /**
   * Triggers before the component is added to the page.
   */
  componentWillMount() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateLocateRequestRoute);

    if (!params.state) {
      this.setState({
        invalidState: true,
      });
      return;
    }

    this.props.statesGetLocateRequestHoc.getLocateRequest(params.state);
  }

  /**
   * Formats the ticket information.
   *
   * @param {string} ticketInfo
   * @returns {{}}
   */
  formatTicketInfo = (ticketInfo) => {
    const ticketDomain = ticketInfo.replace(/^[a-z]+:\/\//i, '').replace(/^([^/]+)\/.*$/i, '$1');

    let ticketUrl = ticketInfo;
    if (!ticketUrl.match('://')) {
      ticketUrl = 'http://' + ticketUrl;
    }

    return {
      label: ticketDomain,
      url: ticketUrl,
    };
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateLocateRequestRoute);

    const isLoading = this.props.statesGetLocateRequestHoc.isLoading || false;
    const error = this.props.statesGetLocateRequestHoc.error || null;
    const stateData = this.props.statesGetLocateRequestHoc.stateInfo || null;
    let locateRequestData = this.props.statesGetLocateRequestHoc.locateRequestInfo || null;
    if (locateRequestData) {
      locateRequestData = locateRequestData[0];
    } else {
      locateRequestData = null;
    }

    const hasError = (error || this.state.invalidState) || null;

    const tickets = [];
    if (locateRequestData) {
      if (locateRequestData.oneCall1) {
        tickets.push(this.formatTicketInfo(locateRequestData.oneCall1));
      }
      if (locateRequestData.oneCall2) {
        tickets.push(this.formatTicketInfo(locateRequestData.oneCall2));
      }
      if (locateRequestData.oneCallTicketEntry1) {
        tickets.push(this.formatTicketInfo(locateRequestData.oneCallTicketEntry1));
      }
      if (locateRequestData.oneCallTicketEntry2) {
        tickets.push(this.formatTicketInfo(locateRequestData.oneCallTicketEntry2));
      }
    }

    return (
      <div id="state-locate-request-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading} />

          <div id="locate-request-row" className="main-row row">
            <div className="col-md-4">
              <StateSideNav
                stateAbbreviation={params.state}
                location={this.props.location}
                urlParams={params}
              />
            </div>
            <div className="col top-col">
              {(isLoading) && (
                <div className="loading">
                  Loading...
                </div>
              )}

              {(!isLoading && hasError) && (
                <div className="alert alert-warning">
                  The locate request information could not be loaded.
                </div>
              )}

              {(!isLoading && !hasError && !locateRequestData) && (
                <div className="alert alert-warning">
                  No locate request information was found.
                </div>
              )}

              {(!isLoading && !hasError && locateRequestData) && (
                <div className="request-list">
                  <div className="row ticket-row">
                    <div className="col">
                      <h2 className="h4">Electronic Ticket</h2>
                      <ul className="ticket-list">
                        {tickets.map((ticket, ticketIndex) => {
                          return (
                            <li
                              className={classNames('ticket-item', {'first-item': !ticketIndex})}
                              key={ticketIndex}
                            >
                              <i className="im-icon im-e-ticket fa-2x" />
                              <span className="ticket-number">
                                <a href={ticket.url} target="_blank">{ticket.label}</a>
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row call-row">
                    <div className="col">
                      <h2 className="h4">Call</h2>
                      <ul className="call-list">
                        <li className="call-item first-item">
                          <i className="im-icon im-phone fa-2x" />
                          <span className="call-number">
                            <a href="tel:811">811</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StateLocateRequestPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  statesGetLocateRequestHoc: PropTypes.shape({
    getLocateRequest: PropTypes.func,
    isLoading: PropTypes.bool,
    locateRequestInfo: PropTypes.array,
    stateInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default statesGetLocateRequestHoc(
  StateLocateRequestPage
);
