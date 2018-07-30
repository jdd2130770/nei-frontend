import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

/**
 * The NotFoundPage component.
 *
 * @constructor
 */
export class NotFoundPage extends React.Component {
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
      <div id="not-found-page" className="system-page">
        <PageTitle title="Page not Found"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <h1 className="nei-h">Oops!</h1>
              <hr />
              <div className="not-found-text">
                The page you are looking for is no longer here, or never existed in the first place (bummer).
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
