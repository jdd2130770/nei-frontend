import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles the registration process.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function registerHocWrapper(WrappedComponent) {
  /**
   * The RegisterHoc higher ticket component.
   */
  class RegisterHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        success: null,
        error: null,
      };
    }

    /**
     * Sends the registration information to the server.
     *
     * @param {{}} registrationData
     */
    register = (registrationData) => {
      if (registrationData.registrationId) {
        return;
      }

      this.setState({
        isLoading: true,
        success: null,
        error: null,
      }, () => {
        serverApi.register(registrationData).then((response) => {
          this.setState({
            isLoading: false,
            success: this.mapResponse(response),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            success: null,
            error,
          });
        });
      });
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {{id: number}} data
     * @returns {boolean}
     */
    mapResponse = (data) => {
      if (data && data.id) {
        return data;
      }

      return {
        id: null
      };
    };

    /**
     * Renders the WrappedComponent.
     *
     * @returns {Object}
     */
    render() {
      const newProps = {
        registerHoc: {
          register: this.register,
          isLoading: this.state.isLoading || false,
          success: this.state.success,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  RegisterHoc.propTypes = {};

  return RegisterHoc;
}
