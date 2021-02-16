import { connect } from 'react-redux';
import App from '../components/App.js';
// import {App} from '../components/App.js';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (e) => {
      dispatch(handleSearchChange(e));
    }
  };
};

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;