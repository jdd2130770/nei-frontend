import PropTypes from 'prop-types';
import React from 'react';
import {Link} from '../../common/link/Link';

import StateHeader from '../../common/stateHeader/StateHeader';
import statesGetByAbbreviationHoc from '../../hoc/statesGetByAbbreviationHoc';
import * as routePaths from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './statePage.scss';

/**
 * The StatePage component.
 *
 * @constructor
 */
export class StatePage extends React.Component {
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
    const params = parseParamsFromRoute(this.props.location.pathname, routePaths.stateRoute);
    if (!params.state) {
      this.setState({
        invalidState: true,
      });
      return;
    }

    this.props.statesGetByAbbreviationHoc.getByAbbreviation(params.state);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const isLoading = this.props.statesGetByAbbreviationHoc.isLoading || false;
    const error = this.props.statesGetByAbbreviationHoc.error || null;
    const stateData = this.props.statesGetByAbbreviationHoc.state || null;

    const hasError = (error || this.state.invalidState) || null;

    const params = parseParamsFromRoute(this.props.location.pathname, routePaths.stateRoute);
    const linkParams = {
      state: (params && params.state) ? params.state : null,
    };

    return (
      <div id="state-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading} />

          <div id="nav-row" className="main-row row">
            <div className="col">
              {(isLoading) && (
                <div className="loading">
                  Loading...
                </div>
              )}

              {(!isLoading && hasError) && (
                <div className="alert alert-warning">
                  The state could not be loaded.
                </div>
              )}

              {(!isLoading && !hasError && !stateData) && (
                <div className="alert alert-warning">
                  No state information was found.
                </div>
              )}

              {(!isLoading && !hasError && stateData) && (
                <div>
                  <div className="row">
                    <div className="col box-col-left">
                      <Link className="link-box" to={routePaths.stateChecklistRoute} params={linkParams}>
                        <div className="link-icon"><i className="fa-2x im-checklist" /></div>
                        <div className="link-label"><span className="h4">Checklist</span></div>
                      </Link>
                    </div>
                    <div className="col box-col-right">
                      <Link className="link-box" to={routePaths.stateLocateRequestRoute} params={linkParams}>
                        <div className="link-icon"><i className="fa-2x im-locate-request" /></div>
                        <div className="link-label"><span className="h4">Locate Request</span></div>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col box-col-left">
                      <Link className="link-box" to={routePaths.stateLawRoute} params={linkParams}>
                        <div className="link-icon"><i className="fa-2x im-law" /></div>
                        <div className="link-label"><span className="h4">LAW</span></div>
                      </Link>
                    </div>
                    <div className="col box-col-right">
                      <Link className="link-box" to={routePaths.stateResourcesRoute} params={linkParams}>
                        <div className="link-icon"><i className="fa-2x im-resources" /></div>
                        <div className="link-label"><span className="h4">Resources</span></div>
                      </Link>
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

StatePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  statesGetByAbbreviationHoc: PropTypes.shape({
    getByAbbreviation: PropTypes.func,
    isLoading: PropTypes.bool,
    state: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
      abbreviation: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default statesGetByAbbreviationHoc(
  StatePage
);
