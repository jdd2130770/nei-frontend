import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../common/link/Link';

import './breadcrumbs.scss';

/**
 * The Breadcrumbs component.
 */
export class Breadcrumbs extends React.Component {
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
    const crumbs = this.props.crumbs || [];
    const crumbsLength = crumbs.length;

    return (
      <nav className="breadcrumbs-wrapper" aria-label="breadcrumb">
        <ol className="breadcrumb">
          {crumbs.map((crumb, index) => {
            const isActive = ((crumbsLength - index - 1) === 0);
            return (
              <li
                key={index}
                className={classNames('breadcrumb-item', {'active': isActive})}
              >
                {(isActive || !crumb.to) ? (
                  crumb.label
                ) : (
                  <Link
                    to={crumb.to}
                    params={crumb.params || {}}
                  >{crumb.label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
    params: PropTypes.object,
  })).isRequired,
};

export default Breadcrumbs;
