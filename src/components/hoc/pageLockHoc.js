import React from 'react';

import serverApi from '../../utils/serverApi';

/**
 * A higher order component wrapper that handles getting the video unlock code for the pageLock.
 *
 * @param {Object} WrappedComponent
 * @returns {Object}
 */
export default function pageLockHocWrapper(WrappedComponent) {
  /**
   * The PageLockHoc higher order component.
   */
  class PageLockHoc extends React.Component {
    /**
     * @constructor
     * @param {{}} props
     * @param {{}} componentContext
     */
    constructor(props, componentContext) {
      super(props, componentContext);

      this.state = {
        isLoading: false,
        unlockCode: null,
        error: null,
      };
    }

    /**
     * Gets the video unlock code from the server.
     */
    getUnlockCode = () => {
      this.setState({
        isLoading: true,
        unlockCode: null,
        error: null,
      }, () => {
        serverApi.getVideoUnlockCode()
          .then((response) => {
            this.setState({
              isLoading: false,
              unlockCode: response,
              error: null,
            });
          }, (error) => {
            this.setState({
              isLoading: false,
              unlockCode: null,
              error,
            });
          });
      });
    };

    /**
     * Renders the WrappedComponent.
     *
     * @returns {Object}
     */
    render() {
      const newProps = {
        pageLockHoc: {
          getUnlockCode: this.getUnlockCode,
          isLoading: this.state.isLoading || false,
          unlockCode: this.state.unlockCode,
          error: this.state.error,
        }
      };

      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  PageLockHoc.propTypes = {};

  return PageLockHoc;
}
