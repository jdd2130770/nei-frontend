import PropTypes from 'prop-types';
import React from 'react';
import {Link} from '../../common/link/Link';

import StateHeader from '../../common/stateHeader/StateHeader';
import StateSideNav from '../../common/stateSideNav/StateSideNav';
import statesGetLegalHoc from '../../hoc/statesGetLegalHoc';
import {lawRoute, stateLawRoute} from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './stateLawPage.scss';

/**
 * The StateLawPage component.
 *
 * @constructor
 */
export class StateLawPage extends React.Component {
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
    const params = parseParamsFromRoute(this.props.location.pathname, stateLawRoute);

    if (!params.state) {
      this.setState({
        invalidState: true,
      });
      return;
    }

    this.props.statesGetLegalHoc.getLegal(params.state);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateLawRoute);

    const isLoading = this.props.statesGetLegalHoc.isLoading || false;
    const error = this.props.statesGetLegalHoc.error || null;
    const stateData = this.props.statesGetLegalHoc.stateInfo || null;
    const legalData = this.props.statesGetLegalHoc.legalInfo || null;

    const hasError = (error || this.state.invalidState) || null;

    return (
      <div id="state-law-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading}/>

          <div id="legal-row" className="main-row row">
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
                  The legal information could not be loaded.
                </div>
              )}

              {(!isLoading && !hasError && !legalData) && (
                <div className="alert alert-warning">
                  No legal information was found.
                </div>
              )}

              {(!isLoading && !hasError && legalData) && (
                <ul className="laws-list">
                  {legalData.map((law, lawIndex) => {
                    const linkParams = {
                      state: params.state,
                      lawId: law.id,
                    };

                    return (
                      <li className="law-item" key={lawIndex}>
                        <Link className="law-item-link clearfix" to={lawRoute} params={linkParams}>
                          <span className="law-title float-left">{law.title}</span>
                          <i className="fa fa-chevron-right float-right" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StateLawPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  statesGetLegalHoc: PropTypes.shape({
    getLegal: PropTypes.func,
    isLoading: PropTypes.bool,
    legalInfo: PropTypes.array,
    stateInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default statesGetLegalHoc(
  StateLawPage
);
