let clientId = "c21d7359a5db4a7d9e16962cca26d847"; // Your client id
let clientSecret = ""; // Your secret
let redirectUri = "http://127.0.0.1:5500/Project/index.html"; // Your redirect uri

let playlistURL = "https://api.spotify.com/v1/playlists/{playlist_id}";
let userPlaylistURL  = "https://api.spotify.com/v1/users/{user_id}/playlists";

function fetchData(){
    fetch("https://api.lyrics.ovh/v1/Sia/Chandelier")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let lyricHolder = document.getElementById("lyricHolder");
        lyricHolder.insertAdjacentHTML("afterend", data.lyrics)

    })
};

window.onload = function(){
    fetchData();
};

/* window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQBgAbsZOmfoBkgMPKSLMlli8_GHPRFws78Rt70R93dBDPDWaE3cfr4TfwQrTWctqwYKDdwn5rEpCQwbZ6c_exydPQK5V21BIypJqhUPbyo3wDfxxfz9fP4aB9U1AA07LjWgysyU6VzEPa2vdjepB2z9Lz0O8vcbmROZpUA';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
        player.togglePlay();
    };

    player.connect();
} */
