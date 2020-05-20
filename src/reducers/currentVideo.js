import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if(action.type === "CHANGE_VIDEO") {
    if(!action.video) {
      return state;
    }
    return action.video;
  }
  return state;
};

export default currentVideoReducer;


/* 
action.video

const changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video
});

*/