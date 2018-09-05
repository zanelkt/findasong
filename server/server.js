
const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const apiEndpointBase = 'http://www.songsterr.com/a/ra/songs.json?pattern='

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/request/:artist', (req,res) => { 
    
  request.get(apiEndpointBase + req.params.artist)
  .then(ApiRes => {
    console.log('ApiRes: ', ApiRes.body);

    if (ApiRes.body == [])
    {
        ApiRes.body = [{artist: {name: 'Not Found'}}]
    }

    res.json(ApiRes.body)
  })
})

module.exports = server