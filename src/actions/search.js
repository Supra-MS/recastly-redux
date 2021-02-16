import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  let options = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  console.log(YOUTUBE_API_KEY, '909009909090')
  return _.debounce((dispatch) => {
    searchYouTube(options, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[3]));
    });
  }, 2000);
};

export default handleVideoSearch;
