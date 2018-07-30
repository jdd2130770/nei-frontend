import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './formLabel.scss';

/**
 * The FormLabel component.
 *
 * @constructor
 */
export class FormLabel extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

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

    return (
      <div className={classNames(extraClassName, 'form-label')}>
        {(subLabel) ? (
          <small className="form-text text-muted">{label}</small>
        ) : (
          <label>
            {label} {isRequired && (<span className="required">*</span>)}
          </label>
        )}
      </div>
    );
  }
}

FormLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  subLabel: PropTypes.bool,
};

FormLabel.defaultProps = {
  isRequired: false,
};

export default FormLabel;
