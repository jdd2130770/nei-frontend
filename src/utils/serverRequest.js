import axios from 'axios';
import lodash from 'lodash';

import mainConfig from '../config/main';

/**
 * The default Axios options to make for each request unless overridden.
 *
 * @type {{}}
 */
const defaultOptions = {
  baseURL: mainConfig.server.baseUrl,
  withCredentials: true,
};

/**
 * The default csrf Axios options to send the csrf token.
 *
 * @type {{}}
 */
const csrfOptions = {
  xsrfCookieName: 'csrf',
  xsrfHeaderName: 'X-CSRF-Token',
};

/**
 * Makes a general request to the server based on the given options.
 *
 * @param {{}} options See Axios Options.
 * @returns {Promise}
 */
function serverRequest(options) {
  // Only send csrf token for non-get requests.
  const requestCsrfOptions = (options.method && options.method !== 'get') ? csrfOptions : {};

  const combinedOptions = Object.assign({}, defaultOptions, requestCsrfOptions, options);

  // Process a cancelable callback.
  if (combinedOptions.cancelable) {
    const cancelTokenSource = axios.CancelToken.source();
    combinedOptions.cancelToken = cancelTokenSource.token;
    combinedOptions.cancelable(cancelTokenSource.cancel);

    delete combinedOptions.cancelable;
  }

  return axios(combinedOptions).catch((err) => {
    if (axios.isCancel(err)) {
      const canceledError = new Error('canceled');
      canceledError.canceled = true;
      throw canceledError;
    }

    let safeError = {
      type: 'UnknownServerError',
      message: 'An unknown internal server error occurred.',
    };
    if (err.response && err.response.data) {
      if (typeof err.response.data === 'string') {
        safeError = {
          type: 'ServerError',
          message: err.response.data
        };
      } else {
        safeError = err.response.data;
      }
    }

    throw safeError;
  }).then((response) => {
    if (response && response.data) {
      return response.data;
    }

    return null;
  });
}

/**
 * Builds the url for the given request.
 *
 * @param {{}} options See Axios Options.
 * @returns {string}
 */
function buildUrl(options) {
  const combinedOptions = Object.assign({}, defaultOptions, options);
  let baseUrl = combinedOptions.baseURL;
  if (baseUrl.substr(-1) === '/') {
    baseUrl = baseUrl.substring(0, baseUrl.length - 1);
  }

  let url = combinedOptions.url;
  if (url[0] === '/') {
    url = url.substr(1);
  }

  return baseUrl + '/' + url;
}

export default {
  all: axios.all,
  buildUrl: buildUrl,
  request: serverRequest,
}
