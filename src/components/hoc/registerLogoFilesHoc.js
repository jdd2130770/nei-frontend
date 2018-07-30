import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles the registration process.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function registerLogoFilesHocWrapper(WrappedComponent) {
  /**
   * The RegisterLogoFilesHoc higher ticket component.
   */
  class RegisterLogoFilesHoc extends React.Component {
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
     * Saves the logo files.
     *
     * @param {number} registrationId
     * @param {Array.<{}>} filesData
     */
    saveLogoFiles = (registrationId, filesData) => {
      this.setState({
        isLoading: true,
        success: null,
        error: null,
      }, () => {
        serverApi.registerLogoFiles(
          registrationId,
          filesData
        ).then((response) => {
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
     * @param {boolean} data
     * @returns {boolean}
     */
    mapResponse = (data) => {
      return data;
    };

    /**
     * Renders the WrappedComponent.
     *
     * @returns {Object}
     */
    render() {
      const newProps = {
        registerLogoFilesHoc: {
          saveLogoFiles: this.saveLogoFiles,
          isLoading: this.state.isLoading || false,
          success: this.state.success,
          error: this.state.error
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  RegisterLogoFilesHoc.propTypes = {};

  return RegisterLogoFilesHoc;
}
