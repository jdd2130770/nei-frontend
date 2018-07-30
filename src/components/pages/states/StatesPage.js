import lodash from 'lodash';
import React from 'react';
import {Link} from '../../common/link/Link';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import statesGetAllHoc from '../../hoc/statesGetAllHoc';
import {stateRoute} from '../../routePaths';

import './statesPage.scss';
import PropTypes from 'prop-types';

/**
 * The StatesPage component.
 *
 * @constructor
 */
export class StatesPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }
  
  /**
   * Triggers before the component is added to the page.
   */
  componentWillMount() {
    this.props.statesGetAllHoc.getAll();
  }
  
  /**
   * Gets the column lists of states.
   *
   * @param {Array.<{}>} states
   * @returns {Array.<Array.<{}>>}
   */
  getStateColumns = (states) => {
    if (!states || !states.length || !Array.isArray(states)) {
      return [];
    }
    
    const columnCount = 3;
    const totalCount = states.length;
    
    let countPerColumn = Math.floor(totalCount / columnCount);
    if (totalCount - (countPerColumn * columnCount)) {
      countPerColumn += 1;
    }
    
    return lodash.chunk(states, countPerColumn);
  };
  
  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const isLoading = this.props.statesGetAllHoc.isLoading || false;
    const error = this.props.statesGetAllHoc.error || null;
    const states = this.props.statesGetAllHoc.states;
    
    const stateColumns = this.getStateColumns(states);
    
    return (
      <div id="states-page" className="system-page">
        <PageTitle title="Choose the State"/>
        <div className="container-fluid">
          <div id="title-row" className="main-row row-odd row">
            <div className="col">

              <div className="row">
                {(!isLoading && !error && states) && (
                  stateColumns.map((stateColumn, columnIndex) => {
                    return (
                      <div className="col" key={columnIndex}>
                        <ul className="state-items">
                          {stateColumn.map((state, stateIndex) => {
                            const stateKey = state.abbreviation.toLowerCase();

                            return (
                              <li className="state-item" key={stateIndex}>
                                <Link className="state-link row" to={stateRoute} params={{state: stateKey}}>
                                  <div className="col-2">
                                    <i className={`state-icon sf-${stateKey}`} />
                                  </div>
                                  <div className="col">
                                    <span className="state-name">{state.name}</span>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })
                )}

                {(isLoading) && (
                  <div className="loading">
                    Loading...
                  </div>
                )}

                {(!isLoading && error) && (
                  <div className="alert alert-warning">
                    The states information could not be loaded.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StatesPage.propTypes = {
  statesGetAllHoc: PropTypes.shape({
    getAll: PropTypes.func,
    isLoading: PropTypes.bool,
    states: PropTypes.array,
    error: PropTypes.object,
  }),
};

export default statesGetAllHoc(
  StatesPage
);
