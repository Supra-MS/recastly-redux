import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
    autoPlayToggle: state.autoPlayToggle
  };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

export default VideoPlayerContainer;
