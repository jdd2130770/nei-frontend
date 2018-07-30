/* eslint-disable no-process-env, no-magic-numbers */

import env from './env';

export default {
  env: env,
  host: process.env.HOST || 'http://0.0.0.0',
  port: process.env.PORT || 3030,

  server: {
    baseUrl: process.env.BACKEND_URL || 'http://0.0.0.0:3030',
    imageUrlDomain: process.env.IMAGE_URL_DOMAIN,
  },

  googleAnalytics: {
    trackId: process.env.GOOGLE_ANALYTICS_ID || null,
  },

  rollbar: {
    accessToken: process.env.ROLLBAR_TOKEN || null,
    captureUncaught: true,
    payload: {
      environment: env
    }
  }
};
