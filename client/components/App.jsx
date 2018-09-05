import React from 'react'
import {getArtistDataFunc} from '../songApiReq'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artistDataArray: [],
      artistToBeSearched: ''
    }

    this.getArtistData = this.getArtistData.bind(this)  }

  componentDidMount() {
    this.getArtistData()
  }

  getArtistData(artist) {
    getArtistDataFunc(artist)
    .then(res => {
      this.setState({
        artistDataArray: res.body
      })
    })
  }

  updateInputValue(evt) {
    this.setState({
      artistToBeSearched: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Find Me Songs</h1>
        {this.state.artistDataArray.length > 0 && <ul style={{listStyle: 'none'}}>
        {console.log(this.state.artistDataArray)}

        <input value={this.state.artistToBeSearched} onChange={evt => this.updateInputValue(evt)}/>
        <button onClick={() => this.getArtistData(this.state.artistToBeSearched)}>Get Songs</button>

        <h3>{this.state.artistDataArray[0].artist.name}:</h3>

        {this.state.artistDataArray.map(songlist => {
          {var videoUrl = 'https://www.youtube.com/results?search_query=' + songlist.title}
          {var lyricsUrl = 'https://www.lyrics.com/lyrics/' + songlist.title}
          return (
          <li key={songlist.id}>
            <span>{songlist.title}</span>
            <a target="_blank" href={videoUrl}> Video</a>
            <a target="_blank"  href={lyricsUrl}> Lyrics</a>
          </li>
        )
        })}
        </ul>}
      </div>
    )
  }
}

export default App