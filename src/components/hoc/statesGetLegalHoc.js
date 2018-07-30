import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a state.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function statesGetLegalHocWrapper(WrappedComponent) {
  /**
   * The StatesGetLegalHoc higher ticket component.
   */
  class StatesGetLegalHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        legalInfo: null,
        stateInfo: null,
        error: null,
      };
    }

    /**
     * Gets the legal information for a state.
     *
     * @param {string} stateAbbreviation
     */
    getLegal = (stateAbbreviation) => {
      this.setState({
        isLoading: true,
        legalInfo: null,
        stateInfo: null,
        error: null,
      }, () => {
        serverApi.statesGetLegal(
          stateAbbreviation
        ).then((response) => {
          this.setState({
            isLoading: false,
            legalInfo: this.mapLegalResponse(response.legal),
            stateInfo: this.mapStateResponse(response.state),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            legalInfo: null,
            stateInfo: null,
            error,
          });
        });
      });
    };

    /**
     * Maps the Axios response to the data.
     *
     * @param {Array.<>} data
     * @returns {boolean}
     */
    mapLegalResponse = (data) => {
      if (!data || !Array.isArray(data) || !data.length) {
        return null;
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
        statesGetLegalHoc: {
          getLegal: this.getLegal,
          isLoading: this.state.isLoading || false,
          legalInfo: this.state.legalInfo,
          stateInfo: this.state.stateInfo,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StatesGetLegalHoc.propTypes = {};

  return StatesGetLegalHoc;
}
