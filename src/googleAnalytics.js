import ReactGA from 'react-ga';

import mainConfig from './config/main.js';

/**
 * Initializes google analytics.
 */
export function init() {
  if (!mainConfig.googleAnalytics.trackId) {
    return;
  }

  ReactGA.initialize(mainConfig.googleAnalytics.trackId);
}

/**
 * Reports the new location to GA.
 *
 * @param {{pathname: string}} newLocation
 */
export function track(newLocation) {
  if (!mainConfig.googleAnalytics.trackId) {
    return;
  }

  ReactGA.set({page: newLocation.pathname});
  ReactGA.pageview(newLocation.pathname);
}
