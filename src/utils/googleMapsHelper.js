/**
 * Parses the location information into a google maps compatible address.
 *
 * @param {{address1: string, address:string, city: string, state: string, zip: string}} locationData
 * @returns {string|null}
 */
function parseAddress(locationData) {
  if (!locationData) {
    return null;
  }

  let addressParts = [];
  if (locationData.address1) {
    addressParts.push(locationData.address1);
  }
  if (!locationData.address1 && locationData.address) {
    addressParts.push(locationData.address);
  }
  if (locationData.city) {
    addressParts.push(locationData.city);
  }
  if (locationData.state) {
    addressParts.push(locationData.state);
  }
  if (locationData.zip) {
    addressParts.push(locationData.zip);
  }

  if (!addressParts.length) {
    return null;
  }

  return encodeURI(
    addressParts.join(',')
  );
}

/**
 * Parses the location information into a string of google static maps parameters.
 * @param {{
 *   address1: string,
 *   address:string,
 *   city: string,
 *   state: string,
 *   zip: string,
 *   coordinates: number[]
 * }} locationData
 * @param {string} apiKey
 * @returns {string|null}
 */
function parseMapParameters(locationData, apiKey) {
  if (!locationData) {
    return null;
  }

  const coordinates = locationData.coordinates || null;
  const fullAddress = parseAddress(locationData);
  const mapParams = [
    'key=' + apiKey,
    'zoom=17',
    'size=600x300',
    'maptype=roadmap',
  ];

  if (coordinates && Array.isArray(coordinates) && coordinates.length) {
    const longitude = coordinates[0];
    const latitude = coordinates[1];

    mapParams.push(`center=${latitude},${longitude}`);
    mapParams.push(`markers=color:red%7C${latitude},${longitude}`);
  } else if (fullAddress) {
    mapParams.push(`center=${fullAddress}`);
    mapParams.push(`markers=color:red%7C${fullAddress}`);
  } else {
    return null;
  }

  return mapParams.join('&');
}

export default {
  parseAddress: parseAddress,
  parseMapParameters: parseMapParameters,
};
