import classNames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import './formInput.scss';

/**
 * The FormInput component.
 *
 * @constructor
 */
export class FormInput extends React.Component {
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
    if (!this.props.formError || !this.props.formError.fieldErrors) {
      return false;
    }
    return Boolean(this.props.formError.fieldErrors[this.props.fieldName]);
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
    if (!this.props.formError || !this.props.formError.fieldErrors) {
      return false;
    }
    const message = this.props.formError.fieldErrors[this.props.fieldName];
    return message.replace(/^"[^"]+"/, 'This field').replace(/"[^"]+"/ig, 'this field');
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
    const icon = (this.props.icon) ? this.props.icon : null;
    const type = (this.props.type) ? this.props.type : 'text';
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
      <div className={classNames(extraClassName, 'form-group form-input')}>
        <label
          className={classNames({'sr-only': hideLabel})}
          htmlFor={id}
        >
          {label}
          {(isRequired) && (<span className="required">*</span>)}
        </label>
        <div className={classNames({'input-group': icon})}>
          {(icon) && (
            <div className="input-group-addon">
              <i className={`fa fa-${icon}`} aria-hidden="true" />
            </div>
          )}

          <input
            id={id}
            type={type}
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

FormInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fieldName: PropTypes.string.isRequired,
  formError: PropTypes.shape({
    fieldErrors: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  fieldErrors: PropTypes.object,
  icon: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  showLabel: PropTypes.bool,
  subLabel: PropTypes.bool,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  isRequired: false,
  showLabel: true,
  subLabel: false,
  type: 'text'
};

export default FormInput;
