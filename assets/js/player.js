//CONST BUTTON ASSINGMENT
const playSongBtn = document.getElementById("playSongBtn");
const trackingAudio = document.getElementById("trackingAudio");

//Audio Progree in Tooltip
const volumBtn = document.getElementById('volumBtn');
const mutedPlayer = document.getElementById('mutedPlayer');


const objAudio = {
    src:'./assets/music/song.mp3',
    loop: true,
    volume:1.0,
    mute:false
}

const audio = new Audio(objAudio.src);

let audioState = false;

const audioTrackingData = () => {
    trackingAudio.value = audio.currentTime / audio.duration * 100;
};

const PlayStatePauseIcon = () => {
   playSongBtn.classList.remove("bi-play-fill");
   playSongBtn.classList.add("bi-pause-fill");
   audio.play();
};

const PlayStateStartIcon = () => {
    playSongBtn.classList.remove("bi-pause-fill");
    playSongBtn.classList.add("bi-play-fill");
    audio.pause();
};

const VolumeChange = () => {
    audio.volume = volumBtn.value / 100;
    console.log(audio.volume);  
};

const toggleMute = () => {
    if (audio.muted) {
            audio.muted = false;
            volumBtn.setAttribute('value', '100');
            mutedPlayer.classList.remove('bi-volume-mute');
            mutedPlayer.classList.add('bi-volume-up');
    } 
    else {
            audio.muted = true;
            volumBtn.setAttribute('value', '0');
            mutedPlayer.classList.remove('bi-volume-up');
            mutedPlayer.classList.add('bi-volume-mute');
    }
};

mutedPlayer.addEventListener("click", () => { toggleMute(); });

volumBtn.addEventListener("input",() => { VolumeChange(); });
//UpdateTime Song
audio.addEventListener("timeupdate", () => { audioTrackingData(); });
 
playSongBtn.addEventListener("click", (e) => {
    e.preventDefault();
    audioState = !audioState;
    console.log(audioState);
    if(audioState) {
        PlayStatePauseIcon();
    }
    else {
        PlayStateStartIcon();
    }
});
