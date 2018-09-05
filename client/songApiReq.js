import request from 'superagent'

const apiEndpointBase = '/request/'

export function getArtistDataFunc(artist) {
    console.log('param', artist);
    
  return request.get(apiEndpointBase + artist)
}