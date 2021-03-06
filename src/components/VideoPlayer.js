import React from 'react';

var VideoPlayer = (props) => {
  console.log(props.video, props.autoPlayToggle, 'inside the videoplayer');
  let url = `https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=1`;
  return (
    !props.video
      ? <div className="video-player">Please wait...</div>
      : <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          {
            !props.autoPlayToggle
              ? <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=0`} allowFullScreen></iframe>
              : <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
          }
        </div>
        <div className="video-player-details">
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>
        </div>
      </div>
  );
};


// PropTypes tell other developers what `props` a component expects.
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoPlayer;
