import lodash from 'lodash';

/**
 * Parses the list of param values out of the given pathname.
 *
 * @param {string} pathname
 * @param {string} routePath
 * @returns {{}}
 */
export function parseParamsFromRoute(pathname, routePath) {
  const currentBits = String(pathname).split('/');
  const paramBits = String(routePath).split('/');

  const params = {};
  paramBits.forEach((paramBit, index) => {
    if (paramBit[0] !== ':') {
      return;
    }
    const paramName = paramBit.substring(1);
    params[paramName] = currentBits[index];
  });

  return params;
}

/**
 * Replaces the route params with their values.
 *
 * @param {string} route
 * @param {object} params
 * @returns {string}
 */
export function replaceRouteParams(route, params) {
  const safeParams = params || {};
  const safeRoute = String(route || '');

  return lodash.reduce(safeParams, (newRoute, paramValue, paramName) => {
    return newRoute.replace(`:${paramName}`, paramValue);
  }, safeRoute);
}
