import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

import {statesRoute} from '../../routePaths';

import './stateHeader.scss';

/**
 * The StateHeader component.
 */
export class StateHeader extends React.Component {
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
    const isLoading = this.props.isLoading || false;
    const stateName = (this.props.stateData) ? this.props.stateData.name : null;

    let title = 'Loading...';
    if (!isLoading && stateName) {
      title = lodash.upperFirst(stateName);
    } else if (!isLoading) {
      title = 'Unknown State';
    }

    return (
      <div id="state-header" className="main-row row">
        <div className="col state-header-col">
          <div className="row">
            <div className="col">
              <h1 className="main-title nei-h">{title}</h1>
            </div>
            <div className="col">
              <h2 className="h4 change-state nei-h">
                <Link to={statesRoute}>
                  Change State <i className="fa fa-chevron-down" />
                </Link>
              </h2>
            </div>
          </div>
          <div className="top-divide">
            <hr className="top-hr" />
            <hr className="top-hr" />
          </div>
        </div>
      </div>
    );
  }
}

StateHeader.propTypes = {
  isLoading: PropTypes.bool,
  stateData: PropTypes.shape({
    name: PropTypes.string,
  }),
};

StateHeader.defaultProps = {
  isLoading: false,
};

export default StateHeader;
