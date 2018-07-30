/* eslint-disable no-process-env */

export default (function getNodeEnvironment() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'production';

    case 'testing':
      return 'testing';

    default:
      return 'development';
  }
})();
