import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (e) => {
      dispatch(handleSearchChange(e));
    }
  };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props..

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
