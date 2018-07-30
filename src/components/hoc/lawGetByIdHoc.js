import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a law.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function lawGetByIdHocWrapper(WrappedComponent) {
  /**
   * The LawGetIdHoc higher ticket component.
   */
  class LawGetIdHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        law: null,
        stateInfo: null,
        error: null,
      };
    }

    /**
     * Gets the law information.
     *
     * @param {number} lawId
     */
    getLaw = (lawId) => {
      this.setState({
        isLoading: true,
        law: null,
        stateInfo: null,
        error: null,
      }, () => {
        serverApi.lawGetById(
          lawId
        ).then((response) => {
          this.setState({
            isLoading: false,
            law: this.mapLawResponse(response.law),
            stateInfo: this.mapStateResponse(response.state),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            law: null,
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
        lawGetByIdHoc: {
          getLaw: this.getLaw,
          isLoading: this.state.isLoading || false,
          law: this.state.law,
          stateInfo: this.state.stateInfo,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  LawGetIdHoc.propTypes = {};

  return LawGetIdHoc;
}
