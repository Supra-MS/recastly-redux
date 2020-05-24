import { connect } from 'react-redux';
import AutoPlay from '../components/AutoPlay.js';
import toggleAutoPlay from '../actions/autoPlay.js';

const mapStateToProps = (state) => {
  return {
    state: state.autoPlayToggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAutoPlayClick: (e) => {
      dispatch(toggleAutoPlay())
    }
  }
}

const AutoPlayContainer = connect(mapStateToProps, mapDispatchToProps)(AutoPlay);

export default AutoPlayContainer;
//..