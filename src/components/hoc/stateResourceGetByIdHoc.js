import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a state resource.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function stateResourceGetByIdHocWrapper(WrappedComponent) {
  /**
   * The StateResourceGetIdHoc higher ticket component.
   */
  class StateResourceGetIdHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        resource: null,
        stateInfo: null,
        error: null,
      };
    }

    /**
     * Gets the resource information.
     *
     * @param {number} resourceId
     */
    getResource = (resourceId) => {
      this.setState({
        isLoading: true,
        resource: null,
        stateInfo: null,
        error: null,
      }, () => {
        serverApi.stateResourceGetById(
          resourceId
        ).then((response) => {
          this.setState({
            isLoading: false,
            resource: this.mapLawResponse(response.operator),
            stateInfo: this.mapStateResponse(response.state),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            resource: null,
            stateInfo: null,
            error,
          });
        });
      });
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {{id: number}} data
     * @returns {{}}
     */
    mapLawResponse = (data) => {
      if (data && data.id) {
        return data;
      }
      return null;
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {{id: number}} data
     * @returns {{}}
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
        stateResourceGetByIdHoc: {
          getResource: this.getResource,
          isLoading: this.state.isLoading || false,
          resource: this.state.resource,
          stateInfo: this.state.stateInfo,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StateResourceGetIdHoc.propTypes = {};

  return StateResourceGetIdHoc;
}
