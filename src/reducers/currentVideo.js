import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // can use switch
  if(action.type === "CHANGE_VIDEO") {
    if(!action.video) {
      return state;
    }
    return action.video;
  }
  return state;
};

export default currentVideoReducer;
