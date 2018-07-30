import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on all the states.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function statesGetAllHocWrapper(WrappedComponent) {
  /**
   * The StatesGetAllHoc higher ticket component.
   */
  class StatesGetAllHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        states: null,
        error: null,
      };
    }

    /**
     * Gets the states data.
     */
    getAll = () => {
      this.setState({
        isLoading: true,
        states: null,
        error: null,
      }, () => {
        serverApi.statesGetAll().then((response) => {
          this.setState({
            isLoading: false,
            states: this.mapResponse(response),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            states: null,
            error,
          });
        });
      });
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {Array.<{id: number, name: string, abbreviation: string}>} data
     * @returns {Array.<{id: number, name: string, abbreviation: string}>}
     */
    mapResponse = (data) => {
      if (!data || !Array.isArray(data) || !data.length) {
        return [];
      }

      // Sort alphabetically by state name.
      data.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      return data;
    };

    /**
     * Renders the WrappedComponent.
     *
     * @returns {Object}
     */
    render() {
      const newProps = {
        statesGetAllHoc: {
          getAll: this.getAll,
          isLoading: this.state.isLoading || false,
          states: this.state.states,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StatesGetAllHoc.propTypes = {};

  return StatesGetAllHoc;
}
