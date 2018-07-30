import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a state.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function statesGetByAbbreviationHocWrapper(WrappedComponent) {
  /**
   * The StatesGetByAbbreviationHoc higher ticket component.
   */
  class StatesGetByAbbreviationHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        state: null,
        error: null,
      };
    }

    /**
     * Gets the state data.
     *
     * @param {string} stateAbbreviation
     */
    getByAbbreviation = (stateAbbreviation) => {
      this.setState({
        isLoading: true,
        state: null,
        error: null,
      }, () => {
        serverApi.statesGetByAbbreviation(
          stateAbbreviation
        ).then((response) => {
          this.setState({
            isLoading: false,
            state: this.mapResponse(response),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            state: null,
            error,
          });
        });
      });
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {{id: number, name: string, abbreviation: string}} data
     * @returns {boolean}
     */
    mapResponse = (data) => {
      if (data && data.id) {
        return data;
      }
      return null;
    };

    /**
     * Renders the WrappedComponent.
     *
     * @returns {Object}
     */
    render() {
      const newProps = {
        statesGetByAbbreviationHoc: {
          getByAbbreviation: this.getByAbbreviation,
          isLoading: this.state.isLoading || false,
          state: this.state.state,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StatesGetByAbbreviationHoc.propTypes = {};

  return StatesGetByAbbreviationHoc;
}
