import classNames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import './formRadio.scss';

/**
 * The FormRadio component.
 *
 * @constructor
 */
export class FormRadio extends React.Component {
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
   * Returns whether or not the itemValue should be checked.
   *
   * @param {string} itemValue
   * @param {string} formValue
   * @returns {boolean}
   */
  isChecked = (itemValue, formValue) => {
    const stringItemValue = String(itemValue);

    if (!this.props.isArray) {
      return (String(formValue) === stringItemValue);
    }

    if (!Array.isArray(formValue)) {
      return false;
    }

    let hasValue = false;
    formValue.forEach((value) => {
      if (String(value) === stringItemValue) {
        hasValue = true;
      }
    });
    return hasValue;
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
    const itemValue = this.props.value;
    const inputName = (this.props.isArray) ? `${fieldName}[]` : fieldName;

    let id = `input-${kebabName}-${itemValue}`;

    const checked = {};
    if (this.isChecked(itemValue, this.props.currentInputValue)) {
      checked.checked = true;
    }

    return (
      <div className="form-check form-radio">
        <label className="form-check-label">
          <input
            id={id}
            type="radio"
            name={inputName}
            value={itemValue}
            onChange={this.props.onChange}
            className={classNames('form-check-input', this.validationClasses())}
            {...checked}
          />
          {label}
        </label>

        {(this.hasError()) && (
          <div className="invalid-feedback">
            {this.getErrorMessage()}
          </div>
        )}
      </div>
    );
  }
}

FormRadio.propTypes = {
  currentInputValue: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldErrors: PropTypes.object,
  isArray: PropTypes.bool,
};

export default FormRadio;
