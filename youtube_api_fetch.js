async function fetchLatestVideo() 
{
  const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
  const channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';  // Example channel ID

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&maxResults=1&part=snippet`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const latestVideo = data.items[0];
    const videoId = latestVideo.id.videoId;
    const title = latestVideo.snippet.title;
    const thumbnailUrl = latestVideo.snippet.thumbnails.high.url;

    console.log(`Latest video ID: ${videoId}`);
    console.log(`Title: ${title}`);
    console.log(`Thumbnail URL: ${thumbnailUrl}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchLatestVideo();