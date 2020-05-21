import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};
const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

// Since there is no action/event we don't need this.
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

export default VideoPlayerContainer;
