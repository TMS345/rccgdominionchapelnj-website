<?php
// latest_live_stream.php

// Ensure the YouTube API key and channel ID are set.
$apiKey = 'AIzaSyC9AcFbxc55FqgYUe4Ku0kwfQEL1yObUws'; // Replace with your YouTube API key
$channelId = 'UC94isZoOyPvYUZcWKxVobJw'; // Replace with the YouTube channel ID you want to fetch the latest live stream from

// API URL to get the latest live stream.
$apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={$channelId}&eventType=live&type=video&key={$apiKey}&order=date&maxResults=1";

// Initialize cURL.
$ch = curl_init();

// Set the cURL options.
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true); // Optional, but good practice to verify SSL

// Execute the cURL request and fetch the response.
$response = curl_exec($ch);

// Check for cURL errors.
if (curl_errno($ch)) {
    echo "<div>Error: Failed to fetch data from YouTube - " . curl_error($ch) . "</div>";
    exit;
}

// Close the cURL session.
curl_close($ch);

// Decode the JSON response.
$data = json_decode($response, true);

if (empty($data['items'])) {
    echo "<div>Error: No live streams found</div>";
    exit;
}

$latestLiveStream = $data['items'][0];
$videoId = $latestLiveStream['id']['videoId'];
$videoTitle = htmlspecialchars($latestLiveStream['snippet']['title'], ENT_QUOTES, 'UTF-8');

// Output the HTML to be injected by htmx.
echo "<iframe style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        allowFullScreen='true' style='width: 50%; position: absolute; top: 0; left: 0'
        src='https://www.youtube.com/embed/{$videoId}'></iframe>";
?>