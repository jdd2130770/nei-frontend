import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting data on a state.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function statesGetChecklistHocWrapper(WrappedComponent) {
  /**
   * The StatesGetChecklistHoc higher ticket component.
   */
  class StatesGetChecklistHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        checklistInfo: null,
        stateInfo: null,
        error: null,
      };
    }

    /**
     * Gets the checklist information for a state.
     *
     * @param {string} stateAbbreviation
     */
    getChecklist = (stateAbbreviation) => {
      this.setState({
        isLoading: true,
        checklistInfo: null,
        stateInfo: null,
        error: null,
      }, () => {
        serverApi.statesGetChecklist(
          stateAbbreviation
        ).then((response) => {
          this.setState({
            isLoading: false,
            checklistInfo: this.mapChecklistResponse(response.checklist),
            stateInfo: this.mapStateResponse(response.state),
            error: null,
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            checklistInfo: null,
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
    mapChecklistResponse = (data) => {
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
        statesGetChecklistHoc: {
          getChecklist: this.getChecklist,
          isLoading: this.state.isLoading || false,
          checklistInfo: this.state.checklistInfo,
          stateInfo: this.state.stateInfo,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  StatesGetChecklistHoc.propTypes = {};

  return StatesGetChecklistHoc;
}
