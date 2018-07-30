import PropTypes from 'prop-types';
import React from 'react';
import {Link} from '../../common/link/Link';

import StateHeader from '../../common/stateHeader/StateHeader';
import StateSideNav from '../../common/stateSideNav/StateSideNav';
import statesGetResourcesHoc from '../../hoc/statesGetResourcesHoc';
import {stateResourceRoute, stateResourcesRoute} from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './stateResourcesPage.scss';

/**
 * The StateResourcesPage component.
 *
 * @constructor
 */
export class StateResourcesPage extends React.Component {
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
    const params = parseParamsFromRoute(this.props.location.pathname, stateResourcesRoute);

    if (!params.state) {
      this.setState({
        invalidState: true,
      });
      return;
    }

    this.props.statesGetResourcesHoc.getResources(params.state);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateResourcesRoute);

    const isLoading = this.props.statesGetResourcesHoc.isLoading || false;
    const error = this.props.statesGetResourcesHoc.error || null;
    const stateData = this.props.statesGetResourcesHoc.stateInfo || null;
    const resourcesData = this.props.statesGetResourcesHoc.resourcesInfo || null;

    const hasError = (error || this.state.invalidState) || null;

    return (
      <div id="state-resources-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading}/>

          <div id="resources-row" className="main-row row">
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
                  The resources information could not be loaded.
                </div>
              )}

              {(!isLoading && !hasError && !resourcesData) && (
                <div className="alert alert-warning">
                  No resource information was found.
                </div>
              )}

              {(!isLoading && !hasError && resourcesData) && (
                <ul className="resources-list">
                  {resourcesData.map((resource, resourceIndex) => {
                    const linkParams = {
                      state: params.state,
                      resourceId: resource.id,
                    };

                    return (
                      <li className="resource-item" key={resourceIndex}>
                        <Link className="resource-item-link clearfix" to={stateResourceRoute} params={linkParams}>
                          <span className="resource-title float-left">{resource.entityName}</span>
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

StateResourcesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  statesGetResourcesHoc: PropTypes.shape({
    getResources: PropTypes.func,
    isLoading: PropTypes.bool,
    resourcesInfo: PropTypes.array,
    stateInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default statesGetResourcesHoc(
  StateResourcesPage
);
