import classNames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {FormRadio} from '../FormRadio/FormRadio'

import './formRadioGroup.scss';

/**
 * The FormRadioGroup component.
 *
 * @constructor
 */
export class FormRadioGroup extends React.Component {
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
      'is-valid': (!hasError && this.props.currentInputValue),
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
    const items = this.props.items;
    const inputName = (this.props.isArray) ? `${fieldName}[]` : fieldName;
    const isArray = Boolean(this.props.isArray);

    const extraClassName = this.props.className || null;
    const extraInputClass = this.props.inputClassName || null;

    const isRequired = Boolean(this.props.isRequired) || null;

    return (
      <div className={classNames(extraClassName, 'form-radio-group')}>
        {(this.props.label) && (
          <label>
            {this.props.label}
            {(isRequired) && (<span className="required">*</span>)}
          </label>
        )}

        {items.map((item, index) => {
          const itemValue = String(item.value);

          return (
            <FormRadio
              key={index}
              label={item.label}
              fieldName={fieldName}
              value={itemValue}
              name={inputName}
              currentInputValue={this.props.currentInputValue}
              isArray={isArray}
              className={classNames(extraInputClass, 'form-control', this.validationClasses())}
              inputClassName={this.props.inputClassName}
              onChange={this.props.onChange}
            />
          );
        })}

        {(this.hasError()) && (
          <div className="form-error is-visible">
            {this.getErrorMessage()}
          </div>
        )}
      </div>
    );
  }
}

FormRadioGroup.propTypes = {
  currentInputValue: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  fieldErrors: PropTypes.object,
  inputClassName: PropTypes.string,
  isArray: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
};

export default FormRadioGroup;
