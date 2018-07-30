import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import React from 'react';

import {FormLabel} from '../FormLabel/FormLabel';

import './formFile.scss';

/**
 * The FormFile component.
 *
 * @constructor
 */
export class FormFile extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Triggered when a new file is dropped into the drop-zone.
   *
   * @param {{}} files
   */
  onDrop = (files) => {
    let values = (this.props.value || []).slice(0);
    values = values.concat(files);

    this.props.onChange({
      target: {value: values}
    });
  };

  /**
   * When a file is to be removed from the queue.
   *
   * @param {number} fileIndex
   * @returns {function}
   */
  onRemoveFile = (fileIndex) => {
    return () => {
      let values = (this.props.value || []).slice(0);
      values.splice(fileIndex, 1);

      this.props.onChange({
        target: {value: values}
      });
    };
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const label = this.props.label;
    const extraClassName = this.props.className || null;
    const isRequired = Boolean(this.props.isRequired) || null;
    const subLabel = this.props.subLabel || null;
    const value = this.props.value || [];

    const isDisabled = Boolean(!this.props.multiple && value.length);

    return (
      <div className={classNames(extraClassName, 'form-file')}>
        {(label) && (
          <FormLabel
            label={label}
            isRequired={isRequired}
          />
        )}

        <div className={classNames('drop-zone', {'is-disabled': isDisabled})}>
          <Dropzone
            disablePreview={true}
            disabled={isDisabled}
            multiple={Boolean(this.props.multiple)}
            onDrop={this.onDrop}
            style={{}}
          >
            <h3 className="h4 drop-header">Drop Files Here or Click For File Dialog</h3>
          </Dropzone>
        </div>

        {(subLabel) && (
          <FormLabel
            label={subLabel}
            subLabel={true}
          />
        )}

        {(value.length || null) && (
          <aside className="pending-files">
            <h3 className="h4 nei-h files-list-header">Pending Files</h3>
            <ul className="files-list">
              {(this.props.value || []).map((file, fileIndex) => {
                const bytesToKilo = 1000;
                const kilobytes = (file.size / bytesToKilo).toFixed(2);

                return (
                  <li className="files-list-item" key={fileIndex}>
                    <span className="file-info">{file.name} [{kilobytes} kB]</span>
                    <span className="file-remove">
                      <button className="btn btn-link" type="button" onClick={this.onRemoveFile(fileIndex)}>
                        <i className="fa fa-times" />
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </aside>
        )}
      </div>
    );
  }
}

FormFile.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

FormFile.defaultProps = {
  multiple: true,
  isRequired: false,
};

export default FormFile;
