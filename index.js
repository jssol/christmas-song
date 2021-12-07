const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const audio = document.getElementById("audio");
const greeting = document.getElementById("greeting");
const volume = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");

const rangify = (number) => {
    let num = number / 100;
    return Math.round(num * 10) / 10;
}

audio.volume = rangify(volume.value);
volumeValue.innerText = volume.value;

volume.oninput = function() {
  audio.volume = rangify(this.value);
  volumeValue.innerText = this.value;
}

let songs = ["https://cw4.scrimba.com/bells.mp3", "https://cw4.scrimba.com/holy.mp3", "https://cw4.scrimba.com/maria.mp3"];
let index = 0;
let isPaused = audio.paused;

const playSong = () => {
    audio.src = songs[index];
    audio.play();
    
    switch(index) {
    case 0:
    greeting.innerHTML = "🎄 Jingle all the way! 🔔";
    break;
    case 1:
    greeting.innerHTML = "🎶 Jesus is born! 👼";
    break;
    case 2:
    greeting.innerHTML = "👪 Merry Christmas! 🔥";
    break;
}
};

const pauseSong = () => {
    audio.src = songs[index];
    audio.pause();
}

const stopSong = () => {
    audio.src = songs[index];
    audio.load();
}

const nextSong = () => {
    audio.pause();
    if(index < 2) {
        index += 1;
        audio.src = songs[index];
    }
    else if(index == 2) {
        index = 0;
        audio.src = songs[index];
    }
    audio.play();
    
    switch(index) {
    case 0:
    greeting.innerHTML = "🎄 Jingle all the way! 🔔";
    break;
    case 1:
    greeting.innerHTML = "🎶 Jesus is born! 👼";
    break;
    case 2:
    greeting.innerHTML = "👪 Merry Christmas! 🔥";
    break;
}
}

const prevSong = () => {
    audio.pause();
    if(index > 0) {
        index -= 1;
        audio.src = songs[index];
    }
    else if(index == 0) {
        index = 2;
        audio.src = songs[index];
    }
    audio.play();
    
    switch(index) {
    case 0:
    greeting.innerText = "🎄 Jingle all the way! 🔔";
    break;
    case 1:
    greeting.innerText = "🎶 Jesus is born! 👼";
    break;
    case 2:
    greeting.innerText = "👪 Merry Christmas! 🔥";
    break;
}
}

playBtn.addEventListener("click", () => {
    playSong();
});

pauseBtn.addEventListener("click", () => {
    pauseSong();
})

stopBtn.addEventListener("click", () => {
    stopSong();
});

nextBtn.addEventListener("click", () => {
    nextSong();
});

prevBtn.addEventListener("click", () => {
    prevSong();
});

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.