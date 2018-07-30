import lodash from 'lodash';

import requester from './serverRequest';

const serverApi = {
  /**
   * csrfTokenGet request.
   *
   * @returns {Promise}
   */
  csrfTokenGet: function csrfTokenGet() {
    return requester.request({
      url: '/csrf-token/get',
      method: 'get',
    });
  },

  /**
   * lawGetById request.
   *
   * @param {number} lawId
   * @returns {Promise}
   */
  lawGetById: function lawGetById(lawId) {
    return requester.request({
      url: `/law/${lawId}`,
      method: 'get',
    });
  },

  /**
   * register request.
   *
   * @param {{}} registrationData
   * @returns {Promise<{}>}
   */
  register: function register(registrationData) {
    return serverApi.csrfTokenGet().then(function afterCsrfTokenSet() {
      return requester.request({
        url: '/register',
        method: 'post',
        data: registrationData
      });
    });
  },

  /**
   * registerListFile request.
   *
   * @param {number} registrationId
   * @param {{}} filesData
   * @returns {Promise<{}>}
   */
  registerListFile: function registerListFile(registrationId, filesData) {
    const requestPromises = [];
    lodash.forEach(filesData, (files, fieldName) => {
      files.forEach((file) => {
        const data = new FormData();
        data.append(fieldName, file, file.name);

        requestPromises.push(
          requester.request({
            url: `/register/${registrationId}/file/list`,
            method: 'post',
            data: data,
            headers: {
              'content-type': 'multipart/form-data',
            }
          })
        );
      });
    });

    return requester.all(requestPromises);
  },

  /**
   * registerLogoFiles request.
   *
   * @param {number} registrationId
   * @param {Array.<{}>} filesData
   * @returns {Promise<{}>}
   */
  registerLogoFiles: function registerLogoFiles(registrationId, filesData) {
    const requestPromises = [];
    lodash.forEach(filesData, (files) => {
      files.forEach((file) => {
        const data = new FormData();
        data.append('file', file, file.name);

        requestPromises.push(
          requester.request({
            url: `/register/${registrationId}/file/logos`,
            method: 'post',
            data: data,
            headers: {
              'content-type': 'multipart/form-data',
            }
          })
        );
      });
    });

    return requester.all(requestPromises);
  },

  /**
   * statesGetAll request.
   *
   * @returns {Promise.<Array.<{}>>}
   */
  statesGetAll: function statesGetAll() {
    return requester.request({
      url: '/states',
      method: 'get',
    });
  },

  /**
   * Video unlock code request.
   *
   * @returns {Promise.<Array.<{}>>}
   */
  getVideoUnlockCode: function getVideoUnlockCode() {
    return requester.request({
      url: '/check/site/heartbeat',
      method: 'get',
    });
  },

  /**
   * statesGetByAbbreviation request.
   *
   * @param {string} abbreviation
   * @returns {Promise.<Array.<{}>>}
   */
  statesGetByAbbreviation: function statesGetByAbbreviation(abbreviation) {
    return requester.request({
      url: `/states/${abbreviation}`,
      method: 'get',
    });
  },

  /**
   * statesGetChecklist request.
   *
   * @param {string} stateAbbreviation
   * @returns {Promise.<Array.<{}>>}
   */
  statesGetChecklist: function statesGetChecklist(stateAbbreviation) {
    return requester.request({
      url: `/states/${stateAbbreviation}/checklist`,
      method: 'get',
    });
  },

  /**
   * statesGetLegal request.
   *
   * @param {string} stateAbbreviation
   * @returns {Promise.<Array.<{}>>}
   */
  statesGetLegal: function statesGetLegal(stateAbbreviation) {
    return requester.request({
      url: `/states/${stateAbbreviation}/legal`,
      method: 'get',
    });
  },

  /**
   * statesGetLocateRequest request.
   *
   * @param {string} stateAbbreviation
   * @returns {Promise.<Array.<{}>>}
   */
  statesGetLocateRequest: function statesGetLocateRequest(stateAbbreviation) {
    return requester.request({
      url: `/states/${stateAbbreviation}/locate-request`,
      method: 'get',
    });
  },

  /**
   * statesGetResources request.
   *
   * @param {number} resourceId
   * @returns {Promise.<Array.<{}>>}
   */
  stateResourceGetById: function stateResourceGetById(resourceId) {
    return requester.request({
      url: `/operator/${resourceId}`,
      method: 'get',
    });
  },

  /**
   * statesGetResources request.
   *
   * @param {string} stateAbbreviation
   * @returns {Promise.<Array.<{}>>}
   */
  statesGetResources: function statesGetResources(stateAbbreviation) {
    return requester.request({
      url: `/states/${stateAbbreviation}/resources`,
      method: 'get',
    });
  },
};

export default serverApi;
