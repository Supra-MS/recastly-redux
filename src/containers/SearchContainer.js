import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
// import handleVideoSearch from '../actions/search.js';

// const mapStateToProps = (state) => {
//   return {
//     handleSearchInputChange2: state.handleSearchInputChange
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (e) => {
      dispatch(handleSearchChange(e)) // handleVideoSearch ; handleSearchChange
    }
  }
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props..
// const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
