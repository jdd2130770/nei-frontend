import React from 'react';
import PropTypes from 'prop-types';

import './pageTitle.scss';

/**
 * The PageTitle component.
 *
 * @constructor
 */
export class PageTitle extends React.Component {
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
    return (
      <div className="container-fluid inset-container">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="header-inset">
            <h1 className="page-name">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
