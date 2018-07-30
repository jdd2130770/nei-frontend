import React from 'react';
import PageLock from '../../common/pageLock/PageLock';
import './videoTeaserPage.scss';

/**
 * The VideoTeaserPage component.
 *
 * @constructor
 */
export class VideoTeaserPage extends React.Component {
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
      <div id="video-teaser-page" className="system-page">
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col text-center">
              <h1 className="h3 nei-h">Teaser Video</h1>
              <PageLock>
                <iframe
                  src="https://player.vimeo.com/video/211568756"
                  width="640"
                  height="360"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen="true"
                />
              </PageLock>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VideoTeaserPage.propTypes = {};

export default VideoTeaserPage;
