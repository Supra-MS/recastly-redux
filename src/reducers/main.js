import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import autoPlayToggle from './autoPlayToggle.js';

//var rootReducer = combineReducers({currentVideo: currentVideo, videoList: videoList})
const rootReducer = combineReducers({currentVideo, videoList, autoPlayToggle})



//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;





