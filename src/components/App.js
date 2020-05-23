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
  }

  componentDidMount() {
    this.props.handleSearchInputChange('silly cat videos')
    // console.log('this.props.store', this.props.store);
  }

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
      dispatch(handleSearchChange(e))
    }
  }
};

export default connect(null, mapDispatchToProps)(App);

// export default App;
