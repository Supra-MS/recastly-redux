import React from 'react';
// import VideoList from './VideoList.js';
// import VideoPlayer from './VideoPlayer.js';
// import Search from './Search.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
// import AppContainer from '../containers/AppContainer.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';



class App extends React.Component {
  constructor(props) {
    super(props);

    /* this.state = {
      videos: [],
      currentVideo: null
    }; */

    // this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.props.handleSearchInputChange('silly cat videos')
    // handleSearchInputChange('silly bird videos')


    // setTimeout( () => {
    //   // this.getYouTubeVideos('funny cat video');
    //   this.props.store.dispatch(handleSearchChange('funny cat video'))
    // }, 1000)
    // console.log('this.props.store', this.props.store);
    //  store.state
  }

  /* handleVideoListEntryTitleClick(video) {
    this.setState({currentVideo: video});
  } */

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (e) => {
      dispatch(handleSearchChange(e)) // handleVideoSearch ; handleSearchChange
    }
  }
};

export default connect(null, mapDispatchToProps)(App);

// export default App;


// <Search getYouTubeVideos={this.getYouTubeVideos}/>
/* <VideoPlayer video={this.state.currentVideo}/> */
/* <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            /> */