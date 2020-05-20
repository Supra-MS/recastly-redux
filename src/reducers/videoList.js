import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if(action.type === "CHANGE_VIDEO_LIST") {
    if(!action.videos) {
      return state;
    }
    return action.videos;
  }
  return state;
};

export default videoListReducer;
