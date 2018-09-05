import React from 'react'
import {getArtistDataFunc} from '../songApiReq'
import {HashRouter as Router, Route} from'react-router-dom'
import Footer from './Footer'
import LandingPage from './LandingPage'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artistDataArray: [],
      artistToBeSearched: ''
    }

    this.getArtistData = this.getArtistData.bind(this)
   // this.getSatellite = this.getSatellite.bind(this)
  }

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

        <h1>Find A Song</h1>

        <ul style={{listStyle: 'none'}}>
        {console.log(this.state.artistDataArray)}
        <form onSubmit={this.submit.bind(this)}>  
          <input value={this.state.artistToBeSearched} onChange={this.updateInputValue.bind(this)}/>
          <input type="submit" value="Get Songs"/>
        </form>

        {this.state.artistDataArray.length == true && <h3>{this.state.artistDataArray[0].artist.name}:</h3>}

          {this.state.artistDataArray.map(songlist => {
            {var url = 'https://www.youtube.com/results?search_query=' + songlist.title}
            return (
            <li key={songlist.id}><span>{songlist.title} </span><a href={url}> Video</a></li>
          )
          })}
        </ul>

           <div className="footer"><h4>Zane Lockett (2018) </h4></div>

      </div>
    )
  }
}

export default App