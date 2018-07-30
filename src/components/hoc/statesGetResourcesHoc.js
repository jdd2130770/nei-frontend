import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a state.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function statesGetResourcesHocWrapper(WrappedComponent) {
  /**
   * The StatesGetResourcesHoc higher ticket component.
   */
  class StatesGetResourcesHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        resourcesInfo: null,
        stateInfo: null,
        error: null,
      };
    }

    /**
     * Gets the resources information for a state.
     *
     * @param {string} stateAbbreviation
     */
    getResources = (stateAbbreviation) => {
      this.setState({
        isLoading: true,
        resourcesInfo: null,
        stateInfo: null,
        error: null,
      }, () => {
        serverApi.statesGetResources(
          stateAbbreviation
        ).then((response) => {
          this.setState({
            isLoading: false,
            resourcesInfo: this.mapResourcesResponse(response.resources),
            stateInfo: this.mapStateResponse(response.state),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            resourcesInfo: null,
            stateInfo: null,
            error,
          });
        });
      });
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {Array.<{}>} data
     * @returns {Array.<{}>}
     */
    mapResourcesResponse = (data) => {
      if (!data || !Array.isArray(data) || !data.length) {
        return [];
      }
      return data;
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {{id: number}} data
     * @returns {boolean}
     */
    mapStateResponse = (data) => {
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
        statesGetResourcesHoc: {
          getResources: this.getResources,
          isLoading: this.state.isLoading || false,
          resourcesInfo: this.state.resourcesInfo,
          stateInfo: this.state.stateInfo,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StatesGetResourcesHoc.propTypes = {};

  return StatesGetResourcesHoc;
}
