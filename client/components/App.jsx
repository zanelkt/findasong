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

  // componentDidMount() {
  //   this.getArtistData('marley')
  // }

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
    this.getArtistData(evt.target.value)
  }
  submit(e) {
    e.preventDefault()
    this.getArtistData(this.state.artistToBeSearched)
  }


  render() {
    return (
      <div>

        <div className = 'app'><h2>Find A Song</h2></div>

        <ul style={{listStyle: 'none'}}>
        {console.log(this.state.artistDataArray)}
        <form onSubmit={this.submit.bind(this)}>  
          <input value={this.state.artistToBeSearched} onChange={this.updateInputValue.bind(this)}/>
          <input type="submit" value="Get Songs"/>
        </form>

        {this.state.artistDataArray.length == true && <h3>{this.state.artistDataArray[0].artist.name}:</h3>}

        {this.state.artistDataArray.map(songlist => {
          {var videoUrl = 'https://www.youtube.com/results?search_query=' + songlist.title}
          {var lyricsUrl = 'https://genius.com/search?q=' + songlist.title}
          {var tabUrl = 'https://www.ultimate-guitar.com/search.php?search_type=title&value=' + songlist.title}
          {var wikiUrl = 'https://en.wikipedia.org/wiki/' + songlist.title}
          {var allMusicUrl = 'https://www.allmusic.com/search/all/' + songlist.title}
          return (
          <li key={songlist.id}>
            <span>{songlist.title}</span>
            <a target="_blank" href={videoUrl}>Video</a>
            <a target="_blank" href={lyricsUrl}>Lyrics</a>
            <a target="_blank" href={tabUrl}>Tab</a>
            <a target="_blank" href={wikiUrl}>Wiki</a>
            <a target="_blank" href={allMusicUrl}>In-Depth</a>
          </li>
        )
        })}
        </ul>
      </div>
    )
  }
}

export default App