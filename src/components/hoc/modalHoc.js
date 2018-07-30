import PropTypes from 'prop-types';
import jQuery from 'jquery'; // eslint-disable-line no-shadow
import React from 'react';

/**
 * Defines the modal init parameters.
 *
 * @param {string} modalId
 * @param {{
 *   backdrop: (boolean|string),
 *   init: boolean,
 *   hocProp: string,
 *   keyboard: boolean,
 *   show: boolean
 * }=} modalOptions
 *
 * @returns {function}
 */
export default function modalInit(modalId, modalOptions) {
  /**
   * A higher order component wrapper that initializes a bootstrap modal.
   *
   * @param {Object} WrappedComponent
   * @returns {Object}
   */
  return function modalHoc(WrappedComponent) {
    /**
     * The ModalHoc higher order component.
     */
    class RawModalHoc extends React.Component {
      /**
       * @constructor
       * @param {{}} props
       * @param {{}} componentContext
       */
      constructor(props, componentContext) {
        super(props, componentContext);
      }

      /**
       * Fires when the component is going to mount.
       */
      componentWillMount() {
        // Register actions with the parent component if it asks for them.
        if (this.props.registerModalActions) {
          this.props.registerModalActions({
            handleUpdate: this.handleUpdate,
            hide: this.hideModal,
            show: this.showModal,
            toggle: this.toggleModal,
          });
        }
      }

      /**
       * Fires when the component mounts.
       */
      componentDidMount() {
        if (modalOptions && modalOptions.init === false) {
          return;
        }

        const safeOptions = modalOptions || {};
        if (this.props.showOnLoad !== undefined) {
          safeOptions.show = Boolean(this.props.showOnLoad);
        } else if (safeOptions.show === undefined) {
          safeOptions.show = false;
        }

        if (this.props.backdrop !== undefined) {
          safeOptions.backdrop = this.props.backdrop;
        }

        this.initModal(safeOptions);
      }

      /**
       * Gets the modal object.
       *
       * @returns {{modal: function}}}
       */
      getModal = () => {
        return jQuery('#' + modalId);
      };

      /**
       * Readjusts the modal's positioning to counter a scrollbar in case one should appear,
       * which would make the modal jump to the left.
       * Only needed when the height of the modal changes while it is open.
       */
      handleUpdate = () => {
        this.getModal().modal('handleUpdate');
      };

      /**
       * Hides the modal.
       */
      hideModal = () => {
        this.getModal().modal('hide');
      };

      /**
       * Initializes the modal with bootstrap modal options.
       *
       * @param {{backdrop: (boolean|string), keyboard: boolean, show: boolean}=} options
       */
      initModal = (options) => {
        this.getModal().modal(options || {});
      };

      /**
       * Show the modal.
       */
      showModal = () => {
        this.getModal().modal('show');
      };

      /**
       * Toggles the modal.
       */
      toggleModal = () => {
        this.getModal().modal('toggle');
      };

      /**
       * Renders the WrappedComponent.
       *
       * @returns {Object}
       */
      render() {
        const hocProp = (modalOptions && modalOptions.hocProp) ? modalOptions.hocProp : 'modalHoc';

        const newProps = {
          [hocProp]: {
            handleUpdate: this.handleUpdate,
            hide: this.hideModal,
            init: this.initModal,
            show: this.showModal,
            toggle: this.toggleModal,
            registerModalActions: null,
          }
        };

        return <WrappedComponent {...this.props} {...newProps} />
      }
    }

    RawModalHoc.propTypes = {
      registerModalActions: PropTypes.func,
      showOnLoad: PropTypes.bool,
      backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ])
    };

    return RawModalHoc;
  };
}
