import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a state.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function statesGetLocateRequestHocWrapper(WrappedComponent) {
  /**
   * The StatesGetLocateRequestHoc higher ticket component.
   */
  class StatesGetLocateRequestHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        locateRequestInfo: null,
        stateInfo: null,
        error: null,
      };
    }

    /**
     * Gets the locateRequest information for a state.
     *
     * @param {string} stateAbbreviation
     */
    getLocateRequest = (stateAbbreviation) => {
      this.setState({
        isLoading: true,
        locateRequestInfo: null,
        stateInfo: null,
        error: null,
      }, () => {
        serverApi.statesGetLocateRequest(
          stateAbbreviation
        ).then((response) => {
          this.setState({
            isLoading: false,
            locateRequestInfo: this.mapLocateRequestResponse(response.locateRequest),
            stateInfo: this.mapStateResponse(response.state),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            locateRequestInfo: null,
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
    mapLocateRequestResponse = (data) => {
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
        statesGetLocateRequestHoc: {
          getLocateRequest: this.getLocateRequest,
          isLoading: this.state.isLoading || false,
          locateRequestInfo: this.state.locateRequestInfo,
          stateInfo: this.state.stateInfo,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StatesGetLocateRequestHoc.propTypes = {};

  return StatesGetLocateRequestHoc;
}
