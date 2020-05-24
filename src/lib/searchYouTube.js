const searchYouTube = ({key, query, max = 5}, callback) => {
  // Using fetch()
  const url = 'https://www.googleapis.com/youtube/v3/search/?';
  fetch(url + new URLSearchParams({
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }))
    .then( (response) => response.json())
    .then( ( {items} ) => {
      if (callback) {
        console.log('🥴', items);
        callback(items);
      }
    })
    .catch(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    } );

};

export default searchYouTube;

// Using Ajax Request
/*
$.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        console.log("🥴", items)
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
  */