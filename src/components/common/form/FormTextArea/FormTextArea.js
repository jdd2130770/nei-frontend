import classNames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import './formTextArea.scss';

/**
 * The FormTextArea component.
 *
 * @constructor
 */
export class FormTextArea extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Returns whether or not the field has an error.
   *
   * @returns {boolean}
   */
  hasError = () => {
    if (!this.props.fieldErrors) {
      return false;
    }
    return Boolean(this.props.fieldErrors[this.props.fieldName]);
  };

  /**
   * Gets the classes for the field if it has an error.
   *
   * @returns {{}}
   */
  validationClasses = () => {
    const hasError = this.hasError();
    return {
      'is-invalid': hasError,
      'is-valid': (!hasError && this.props.value),
    };
  };

  /**
   * Returns the error message if the given field has an error.
   *
   * @returns {string}
   */
  getErrorMessage = () => {
    if (!this.props.fieldErrors) {
      return false;
    }
    return this.props.fieldErrors[this.props.fieldName];
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const fieldName = this.props.fieldName;
    const kebabName = lodash.kebabCase(this.props.fieldName);
    const label = this.props.label;

    const extraClassName = this.props.className || null;
    const extraInputClass = this.props.inputClassName || null;
    const id = `input-${kebabName}`;

    let placeholder = this.props.placeholder;
    if (!placeholder && placeholder !== false) {
      placeholder = label;
    } else if (!placeholder) {
      placeholder = '';
    }

    let hideLabel = !this.props.showLabel;
    const subLabel = this.props.subLabel || null;
    if (subLabel) {
      hideLabel = true;
    }

    const isRequired = Boolean(this.props.isRequired) || null;
    const extraProps = {};
    if (isRequired) {
      extraProps.required = true;
    }

    return (
      <div className={classNames(extraClassName, 'form-group form-text-area')}>
        <label
          className={classNames({'sr-only': hideLabel})}
          htmlFor={id}
        >
          {label}
          {(isRequired) && (<span className="required">*</span>)}
        </label>
        <div>
          <textarea
            id={id}
            name={fieldName}
            className={classNames(extraInputClass, 'form-control', this.validationClasses())}
            placeholder={placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            {...extraProps}
          />
        </div>

        {(subLabel) && (
          <small className="form-text text-muted">{label}</small>
        )}

        {(this.hasError()) && (
          <div className="invalid-feedback">
            {this.getErrorMessage()}
          </div>
        )}
      </div>
    );
  }
}

FormTextArea.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  fieldErrors: PropTypes.object,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  showLabel: PropTypes.bool,
  subLabel: PropTypes.bool,
};

FormTextArea.defaultProps = {
  isRequired: false,
  showLabel: true,
  subLabel: false
};

export default FormTextArea;
