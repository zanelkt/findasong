import request from 'superagent'

// const apiEndpointBase = 'https://api.wheretheiss.at/v1/'


const apiEndpointBase = '/v1/'

export function getArtistDataFunc(artist) {
    console.log('param', artist);
    
  return request.get(apiEndpointBase + artist)
}

// export function getSatellite(satId) {
//   return request.get(apiEndpointBase + 'satellites/' + satId)
// }