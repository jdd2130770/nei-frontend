import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import modalHoc from '../../../hoc/modalHoc';

import './registerLoadingModal.scss';

/**
 * Defines the id of the modal.
 * @type {string}
 */
const MODAL_ID = 'register-loading-modal';

/**
 * Modal Options.
 *
 * @type {{backdrop: string}}
 */
const modalOptions = {
  backdrop: 'static',
};

/**
 * The RegisterLoadingModal component.
 *
 * @constructor
 */
export class RegisterLoadingModal extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Runs right before the component receives new props.
   *
   * @param {{}} nextProps
   */
  componentWillReceiveProps(nextProps) {
  }

  /**
   * When the close button is clicked.
   */
  onCloseClicked = () => {
    this.props.modalHoc.hide();
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    let progressPercent = 10;
    if (this.props.registerLogoFilesHoc.success) {
      progressPercent = 100; // eslint-disable-line no-magic-numbers
    } else if (this.props.registerLogoFilesHoc.success) {
      progressPercent = 60; // eslint-disable-line no-magic-numbers
    } else if (this.props.registerHoc.success) {
      progressPercent = 35; // eslint-disable-line no-magic-numbers
    }

    const showClose = Boolean(
      this.props.registerHoc.error
      || this.props.registerListFileHoc.error
      || this.props.registerLogoFilesHoc.error
      || this.props.registerLogoFilesHoc.success
    );

    const hasError = Boolean(
      this.props.registerHoc.error
      || this.props.registerListFileHoc.error
      || this.props.registerLogoFilesHoc.error
    );
    if (hasError) {
      progressPercent = 100; // eslint-disable-line no-magic-numbers
    }

    const hasSuccess = Boolean(
      this.props.registerLogoFilesHoc.success
    );

    return (
      <div id="register-loading-modal" className="modal fade show system-modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="h5 modal-title">Saving Registration Form</h2>

              {(showClose) && (
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={this.onCloseClicked}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              )}
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  Saving registration information...
                </div>
                <div className="col-2">
                  {(this.props.registerHoc.success) && (
                    <i className="fa fa-check" />
                  )}

                  {(this.props.registerHoc.error) && (
                    <i className="fa fa-exclamation-circle" />
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  Uploading List File(s)...
                </div>
                <div className="col-2">
                  {(this.props.registerListFileHoc.success) && (
                    <i className="fa fa-check" />
                  )}

                  {(this.props.registerListFileHoc.error) && (
                    <i className="fa fa-exclamation-circle" />
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  Uploading Logo Files...
                </div>
                <div className="col-2">
                  {(this.props.registerLogoFilesHoc.success) && (
                    <i className="fa fa-check" />
                  )}

                  {(this.props.registerLogoFilesHoc.error) && (
                    <i className="fa fa-exclamation-circle" />
                  )}
                </div>
              </div>

              <div className="row progress-row">
                <div className="col-2">
                  <span>Progress:</span>
                </div>
                <div className="col">
                  <div className="progress">
                    <div
                      className={classNames('progress-bar', {
                        'bg-danger': hasError,
                        'bg-success': hasSuccess,
                        'progress-bar-animated': !showClose,
                        'progress-bar-striped': !showClose,
                      })}
                      role="progressbar"
                      style={{width: progressPercent + '%'}}
                      aria-valuenow={progressPercent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  {(this.props.registerHoc.error) && (
                    <div className="alert alert-danger">
                      {this.props.registerHoc.error.message}
                    </div>
                  )}

                  {(this.props.registerListFileHoc.error) && (
                    <div className="alert alert-danger">
                      {this.props.registerListFileHoc.error.message}
                    </div>
                  )}

                  {(this.props.registerLogoFilesHoc.error) && (
                    <div className="alert alert-danger">
                      {this.props.registerLogoFilesHoc.error.message}
                    </div>
                  )}

                  {(this.props.registerLogoFilesHoc.success) && (
                    <div className="alert alert-success">
                      Registration Success
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {(showClose) && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.onCloseClicked}
                >Close</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterLoadingModal.propTypes = {
  modalHoc: PropTypes.shape({
    handleUpdate: PropTypes.func,
    hide: PropTypes.func,
    init: PropTypes.func,
    show: PropTypes.func,
    toggle: PropTypes.func,
    registerModalActions: PropTypes.func,
  }),

  registerModalActions: PropTypes.func,

  registerHoc: PropTypes.shape({
    isLoading: PropTypes.bool,
    success: PropTypes.shape({id: PropTypes.number}),
    error: PropTypes.object,
  }).isRequired,

  registerListFileHoc: PropTypes.shape({
    isLoading: PropTypes.bool,
    success: PropTypes.shape({id: PropTypes.number}),
    error: PropTypes.object,
  }).isRequired,

  registerLogoFilesHoc: PropTypes.shape({
    isLoading: PropTypes.bool,
    success: PropTypes.shape({id: PropTypes.number}),
    error: PropTypes.object,
  }).isRequired,
};

export default modalHoc(MODAL_ID, modalOptions)(
  RegisterLoadingModal
);
