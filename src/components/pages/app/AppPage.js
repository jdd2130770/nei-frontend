import React from 'react';
import {Link} from 'react-router-dom';

import appImagePath from './assets/nei-app-img.png';
import appStoreImagePath from './assets/apple-store.png';
import featuresImagePath from './assets/features.png';
import googlePlayStoreImagePath from './assets/google-play-store.png';
import shovelImagePath from './assets/nei-shovel.png';
import './appPage.scss';

/**
 * The AppPage component.
 *
 * @constructor
 */
export class AppPage extends React.Component {
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
      <div id="app-page" className="system-page">
        <div className="container-fluid">
          <div className="download-row-wrapper">
            <div className="row main-row download-row">
              <div className="col-md">
                <h1 className="main-title">The NEI App</h1>
                <h2 className="h3 download-title">Download the app for all of your devices.</h2>
                <p className="download-text">
                  A standardized method of accessing relevant damage prevention law for all 50 states by topic.
                </p>
                <div className="row">
                  <div className="col">
                    <a
                      className="app-store"
                      href="https://itunes.apple.com/us/app/safe-excavator/id1323108596?mt=8"
                      target="_blank"
                      title="iOS App Store"
                    >
                      <img className="apple-store-img" src={appStoreImagePath} />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="google-play-store"
                      href="https://play.google.com/store/apps/details?id=com.clevyr.safeexcevator"
                      target="_blank"
                      title="Google Play Store"
                    >
                      <img className="google-play-store-img" src={googlePlayStoreImagePath} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                &nbsp;
                <img className="nei-app-img d-md-none" src={appImagePath} />
              </div>
              <div className="nei-app-img-wrapper d-none d-sm-none d-md-block">
                <img className="nei-app-img" src={appImagePath} />
              </div>
            </div>
          </div>
          <div className="row main-row info-row">
            <div className="col">
              <h2 className="h1 nei-h">Safe Excavator Application</h2>
              <p className="h3 app-info">
                A single-source repository of damage prevention law, updated to reflect a changing
                legislative environment.
              </p>
            </div>
          </div>
          <div className="row main-row specs-row">
            <div className="col-md-4">
              <ul className="app-specs-list app-specs-left">
                <li className="app-spec">
                  <div className="row">
                    <div className="col">
                      <h3 className="h4 app-spec-label">Locate Request</h3>
                      <p className="app-spec-description">
                        A simple phone call to safe digging in all 50 states.
                      </p>
                    </div>
                    <div className="col-3 app-spec-img-col">
                      <img className="app-spec-img" src={shovelImagePath} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h3 className="h4 app-spec-label">Checklist</h3>
                      <p className="app-spec-description">
                        A step-by-step list of legal requirements for safe excavation.
                      </p>
                    </div>
                    <div className="col-3 app-spec-img-col">
                      <img className="app-spec-img" src={shovelImagePath} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h3 className="h4 app-spec-label">LAW</h3>
                      <p className="app-spec-description">
                        Easy to understand content with direct citations to applicable laws.
                      </p>
                    </div>
                    <div className="col-3 app-spec-img-col">
                      <img className="app-spec-img" src={shovelImagePath} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 features-col">
              <div className="nei-features-img-wrapper">
                <img className="nei-features-img" src={featuresImagePath} />
              </div>
            </div>
            <div className="col-md-4">
              <ul className="app-specs-list app-specs-right">
                <li className="app-spec">
                  <div className="row">
                    <div className="col-3 app-spec-img-col">
                      <img className="app-spec-img" src={shovelImagePath} />
                    </div>
                    <div className="col">
                      <h3 className="h4 app-spec-label">Connect</h3>
                      <p className="app-spec-description">
                        Get connected to the most recent information.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3 app-spec-img-col">
                      <img className="app-spec-img" src={shovelImagePath} />
                    </div>
                    <div className="col">
                      <h3 className="h4 app-spec-label">Location Request</h3>
                      <p className="app-spec-description">
                        Automatically selects most relevant state based on your location.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3 app-spec-img-col">
                      <img className="app-spec-img" src={shovelImagePath} />
                    </div>
                    <div className="col">
                      <h3 className="h4 app-spec-label">Resources</h3>
                      <p className="app-spec-description">
                        Interface designed for easy use by non-legal personnel.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppPage.propTypes = {};

export default AppPage;
