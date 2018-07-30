import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * The type of list file for compliance programs.
 * @type {string}
 */
const LIST_FILE_COMPLIANCE = 'compliance';

/**
 * The type of list file for supplemental efforts.
 * @type {string}
 */
const LIST_FILE_SUPPLEMENTAL = 'supplemental';

/**
 * A higher order component wrapper that handles the registration process.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function registerListFileHocWrapper(WrappedComponent) {
  /**
   * The RegisterListFileHoc higher ticket component.
   */
  class RegisterListFileHoc extends React.Component {
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
     * Saves a list file.
     *
     * @param {number} registrationId
     * @param {{}} fileData
     * @param {string} type
     */
    saveListFile = (registrationId, fileData, type) => {
      this.setState({
        isLoading: true,
        success: null,
        error: null,
      }, () => {
        serverApi.registerListFile(
          registrationId,
          fileData,
          type
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
        registerListFileHoc: {
          saveListFile: this.saveListFile,
          isLoading: this.state.isLoading || false,
          success: this.state.success,
          error: this.state.error,
          listFileTypes: {
            compliance: LIST_FILE_COMPLIANCE,
            supplemental: LIST_FILE_SUPPLEMENTAL,
          }
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  RegisterListFileHoc.propTypes = {};

  return RegisterListFileHoc;
}
