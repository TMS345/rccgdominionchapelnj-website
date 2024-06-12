<?php
// latest_live_stream.php

// Ensure the YouTube API key and channel ID are set.
$apiKey = 'AIzaSyAqEKiUoSQ8sR81kpuaZLJNlsEwmBHFAH0'; // Replace with your YouTube API key
$channelId = 'UC94isZoOyPvYUZcWKxVobJw'; // Replace with the YouTube channel ID you want to fetch the latest live stream from

// API URL to get the latest live stream.
$apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={$channelId}&eventType=live&type=video&key={$apiKey}&order=date&maxResults=1";

// Fetch the data from the API.
$response = file_get_contents($apiUrl);

if ($response === FALSE) {
    echo "<div>Error: Failed to fetch data from YouTube</div>";
    exit;
}

$data = json_decode($response, true);

if (empty($data['items'])) {
    echo "<div>Error: No live streams found</div>";
    exit;
}

$latestLiveStream = $data['items'][0];
$videoId = $latestLiveStream['id']['videoId'];
$videoTitle = htmlspecialchars($latestLiveStream['snippet']['title'], ENT_QUOTES, 'UTF-8');

// Output the HTML to be injected by htmx.
echo "<h2>{$videoTitle}</h2>";
echo "<iframe width='560' height='315' src='https://www.youtube.com/embed/{$videoId}' frameborder='0' allowfullscreen></iframe>";
?>