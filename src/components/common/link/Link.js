import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Link as DomLink} from 'react-router-dom';

import {replaceRouteParams} from '../../../utils/routeHelper';

/**
 * The Link component.
 *
 * @constructor
 */
export class Link extends React.Component {
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
    const linkProps = Object.assign({}, this.props);
    delete linkProps.params;

    if (this.props.params && this.props.to) {
      const params = this.props.params;
      if (typeof this.props.to === 'string') {
        linkProps.to = replaceRouteParams(this.props.to, params);
      } else if (lodash.isPlainObject(this.props.to) && this.props.to.pathname) {
        linkProps.to.pathname = replaceRouteParams(this.props.to.pathname, params);
      }
    }

    return (
      <DomLink {...linkProps} />
    );
  }
}

Link.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string, PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
    })
  ]).isRequired,
  params: PropTypes.object,
  replace: PropTypes.bool,
  innerRef: PropTypes.func,
  className: PropTypes.string,
};

export default Link;
