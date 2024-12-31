//CONST BUTTON ASSINGMENT
const playSongBtn = document.getElementById("playSongBtn");
const trackingAudio = document.getElementById("trackingAudio");

//Audio Progree in Tooltip
const volumBtn = document.getElementById('volumBtn');
const mutedPlayer = document.getElementById('mutedPlayer');

let audioState = false;

// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('YTPlayer', {
        height: '60',
        width: '60',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onStateChange': onPlayerStateChange,
            'onPlayerStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setInterval(audioTrackingData, 1000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

const audioTrackingData = () => {
    trackingAudio.value = player.getCurrentTime() / player.getDuration() * 100;
};

const PlayStatePauseIcon = () => {
    playSongBtn.classList.remove("bi-play-fill");
    playSongBtn.classList.add("bi-pause-fill");
    player.playVideo();

};

const PlayStateStartIcon = () => {
    playSongBtn.classList.remove("bi-pause-fill");
    playSongBtn.classList.add("bi-play-fill");
    stopVideo();
};

const VolumeChange = () => {
    player.setVolume(volumBtn.step);
    console.log(player.setVolume(volumBtn.step));
};

const toggleMute = () => {
    if (player.isMuted) {
        player.isMuted = false;
        volumBtn.setAttribute('value', '100');
        mutedPlayer.classList.remove('bi-volume-up');
        mutedPlayer.classList.add('bi-volume-mute');
        player.setVolume(100);

    }
    else {
        player.isMuted = true;
        volumBtn.setAttribute('value', '0');
        mutedPlayer.classList.remove('bi-volume-mute');
        mutedPlayer.classList.add('bi-volume-up');
        player.setVolume(0);
    }
};

mutedPlayer.addEventListener("click", () => { toggleMute(); });

volumBtn.addEventListener("input", () => { VolumeChange(); });

playSongBtn.addEventListener("click", (e) => {
    e.preventDefault();
    audioState = !audioState;
    console.log(audioState);
    if (audioState) {
        PlayStatePauseIcon();
    }
    else {
        PlayStateStartIcon();
    }
});

