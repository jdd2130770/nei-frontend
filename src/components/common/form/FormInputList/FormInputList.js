import classNames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {FormInput} from '../FormInput/FormInput';

import './formInputList.scss';

/**
 * The FormInputList component.
 *
 * @constructor
 */
export class FormInputList extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);

    let values = [''];
    if (props.value && Array.isArray(props.value) && props.value.length) {
      values = props.value;
    }

    this.state = {
      numberOfInputs: values.length,
      values,
    };
  }

  /**
   * Adds a new input field.
   *
   * @returns {function}
   */
  onAddInput = () => {
    return () => {
      const numberOfInputs = this.state.numberOfInputs + 1;
      const values = (this.state.values || []).slice(0);
      values.push('');

      this.setState({
        numberOfInputs,
        values,
      });

      if (this.props.onChange) {
        this.props.onChange({
          target: {value: values}
        });
      }
    };
  };

  /**
   * Removes an input field.
   *
   * @param {number} inputIndex
   * @returns {function}
   */
  onRemoveInput = (inputIndex) => {
    return () => {
      let numberOfInputs = this.state.numberOfInputs - 1;
      let values = (this.props.value || []).slice(0);

      if (numberOfInputs < 1) {
        numberOfInputs = 1;
        values = [''];
      } else {
        values.splice(inputIndex, 1);
      }

      this.setState({
        numberOfInputs,
        values,
      });

      if (this.props.onChange) {
        this.props.onChange({
          target: {value: values}
        });
      }
    };
  };

  /**
   * Triggered when the input value is changed.
   *
   * @param {number} inputIndex
   * @returns {function}
   */
  onInputChange = (inputIndex) => {
    return (changeEvent) => {
      const values = (this.state.values || []).slice(0);
      values[inputIndex] = changeEvent.target.value;

      this.setState({
        values,
      });

      if (this.props.onChange) {
        this.props.onChange({
          target: {value: values}
        });
      }
    };
  };

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const fieldName = this.props.fieldName;
    const inputName = `${fieldName}[]`;
    const label = this.props.label;

    const extraClassName = this.props.className || null;
    const isRequired = Boolean(this.props.isRequired) || null;

    let hideLabel = !this.props.showLabel;
    const subLabel = this.props.subLabel || null;
    if (subLabel) {
      hideLabel = true;
    }

    let values = this.state.values || [];

    return (
      <div className={classNames(extraClassName, 'form-group form-input-list')}>
        <label className={classNames({'sr-only': hideLabel})}>
          {label}
          {(isRequired) && (<span className="required">*</span>)}
        </label>
        <div className="inputs-list">
          {lodash.range(this.state.numberOfInputs).map((index) => {
            return (
              <div className="inputs-input row" key={index}>
                <div className="col">
                  <FormInput
                    label=""
                    showLabel={false}
                    fieldName={inputName}
                    inputClassName={this.props.inputClassName}
                    icon={this.props.icon}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    value={values[index]}
                    onChange={this.onInputChange(index)}
                  />
                </div>
                <div className="col-1 add-remove-col">
                  <span className="input-plus">
                    <button className="btn btn-link" onClick={this.onAddInput(index)} type="button">
                      <i className="fa fa-plus-circle" />
                    </button>
                  </span>

                  {(this.state.numberOfInputs > 1) && (
                    <span className="input-minus">
                      <button className="btn btn-link" onClick={this.onRemoveInput(index)} type="button">
                        <i className="fa fa-minus-circle" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {(subLabel) && (
          <small className="form-text text-muted">{label}</small>
        )}
      </div>
    );
  }
}

FormInputList.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
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

FormInputList.defaultProps = {
  isRequired: false,
  showLabel: true,
  subLabel: false,
  type: 'text'
};

export default FormInputList;
