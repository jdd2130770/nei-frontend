import React from 'react';
import PageLock from '../../common/pageLock/PageLock';

import './video811Page.scss';

/**
 * The Video811Page component.
 *
 * @constructor
 */
export class Video811Page extends React.Component {
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
      <div id="video-811-page" className="system-page">
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col text-center">
              <h1 className="h3 nei-h">811</h1>
              <PageLock>
                <iframe
                  src="https://player.vimeo.com/video/211568881"
                  width="640"
                  height="360"
                  frameBorder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowFullScreen
                />
              </PageLock>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Video811Page.propTypes = {};

export default Video811Page;
