import { connect } from 'react-redux';
import Search from './../components/Search.js';
// import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';

const mapStateToProps = (state) => {
  return {
    video: state.video,
    videos: state.videos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (e) => {
      dispatch(handleVideoSearch(e)) // handleVideoSearch ; handleSearchChange
    }
  }
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
