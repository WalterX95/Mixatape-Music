//CONST BUTTON ASSINGMENT
const playSongBtn = document.getElementById("playSongBtn");
const trackingAudio = document.getElementById("trackingAudio");

//Audio Progree in Tooltip
const volumBtn = document.getElementById('volumBtn');

const objAudio = {
    src:'./assets/music/song.mp3',
    loop: true,
    volume:100,
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
