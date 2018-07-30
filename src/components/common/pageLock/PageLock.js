import PropTypes from 'prop-types';
import React from 'react';
import pageLockHoc from '../../hoc/pageLockHoc';

import './pageLock.scss';

/**
 * The PageLock component.
 */
export class PageLock extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
    this.state = {
      isUnlocked: false,
      inputValue: ''
    };
  }

  /**
   * Called before the component is added to the page.
   */
  componentWillMount() {
    this.props.pageLockHoc.getUnlockCode();
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const { isLoading, unlockCode } = this.props.pageLockHoc;

    const checkPassword = (changeEvent) => {
      const unlockCodeFetched = !!unlockCode;
      const passwordMatchesUnlockCode =
        changeEvent.target.value === unlockCode;

      if (unlockCodeFetched && passwordMatchesUnlockCode) {
        this.setState({ isUnlocked: true });
      }
    };

    return (
      this.state.isUnlocked ? (
        <div>{this.props.children}</div>
      ) : (
        <div className="page-lock">
          {
            isLoading ? (
              <div>Loading...</div>
            ) : (
              <input
                className="page-lock-password-field"
                placeholder="Enter Password"
                type="password"
                onChange={checkPassword}
                onSubmit={(e) => e.preventDefault()}
              />
            )
          }
        </div>
      )
    );
  }
}

PageLock.propTypes = {
  children: PropTypes.element,
  pageLockHoc: PropTypes.shape({
    getUnlockCode: PropTypes.func,
    isLoading: PropTypes.bool,
    unlockCode: PropTypes.string,
    error: PropTypes.object,
  })
};

export default pageLockHoc(
  PageLock
);
