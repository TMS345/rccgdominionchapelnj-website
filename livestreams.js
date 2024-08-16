const YOUTUBE_API_KEY = 'AIzaSyC9AcFbxc55FqgYUe4Ku0kwfQEL1yObUws';
const FACEBOOK_ACCESS_TOKEN = 'c420c703eb04ecbb72be0673cb29e2dc';

const YOUTUBE_CHANNEL_ID = 'UC94isZoOyPvYUZcWKxVobJw';
const FACEBOOK_PAGE_ID = '400119902970844';

document.addEventListener('DOMContentLoaded', () => {
    fetchYouTubeLivestreams();
    fetchFacebookLivestreams();
});

function fetchYouTubeLivestreams() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const streams = JSON.stringify (data);
            const container = document.getElementById('youtube-live-streams');

            alert (streams);

            if (streams.length === 0) {
                container.innerHTML += '<p>No live streams found.</p>';
                return;
            }
            
            streams.forEach(stream => {
                const { title, thumbnails, liveBroadcastContent, resourceId } = stream.snippet;
                if (liveBroadcastContent === 'live') {
                    const streamElement = document.createElement('div');
                    streamElement.innerHTML = `
                        <h3>${title}</h3>
                        <a href="https://www.youtube.com/watch?v=${resourceId.videoId}" target="_blank">
                            <img src="${thumbnails.high.url}" alt="${title}">
                        </a>
                    `;
                    container.appendChild(streamElement);
                }
            });
        })
        .catch(error => console.error('Error fetching YouTube streams'));
}

function fetchFacebookLivestreams() {
    const url = `https://graph.facebook.com/${FACEBOOK_PAGE_ID}?fields=live_videos&access_token=${FACEBOOK_ACCESS_TOKEN}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const streams = data.live_videos.data;
            const container = document.getElementById('facebook-live-streams');
            
            if (streams.length === 0) {
                container.innerHTML += '<p>No live streams found.</p>';
                return;
            }
            
            streams.forEach(stream => {
                const { title, thumbnail, permalink_url } = stream;
                if (stream.status === 'LIVE') {
                    const streamElement = document.createElement('div');
                    streamElement.innerHTML = `
                        <h3>${title}</h3>
                        <a href="${permalink_url}" target="_blank">
                            <img src="${thumbnail}" alt="${title}">
                        </a>
                    `;
                    container.appendChild(streamElement);
                }
            });
        })
        .catch(error => console.error('Error fetching Facebook streams'));
}