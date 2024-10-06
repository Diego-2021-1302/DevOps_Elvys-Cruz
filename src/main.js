// Song data
const songList = [
    {
        title: "Nosotros",
        file: "Nosotros.mp3",
        cover: "Nosotros.jpg"
    },
    {
        title: "Or Nah Anuel",
        file: "Or Nah.mp3",
        cover: "Or Nah.jpg"
    },
    {
        title: "Si Tu Me Busca",
        file: "Si Tu Me Busca .mp3",
        cover: "Cover.jpg"
    },
];

// Current song
let actualSong = null;

// Capture DOM elements
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

// Add event listeners
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", () => nextSong());
audio.addEventListener("error", () => {
    console.error("Error al cargar la canción.");
});

// Control event listeners
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();   
    } else {
        pauseSong();
    }
});
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// Load songs and display the list
function loadSongs() {
    songList.forEach((song, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = song.title;
        link.href = "#";
        link.addEventListener("click", () => loadSong(index));
        li.appendChild(link);
        songs.appendChild(li);
    });
}

// Load selected song
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = "./audio/" + songList[songIndex].file;
        playSong();
        changeSongtitle(songIndex);
        changeCover(songIndex);
    }
}

// Update progress bar
function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";
}

// Clickable progress bar
function setProgress(event) {
    const totalWidth = this.offsetWidth;
    const progressWidth = event.offsetX;
    const current = (progressWidth / totalWidth) * audio.duration;
    audio.currentTime = current;
}

// Update controls
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    } else {
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

// Play song
function playSong() {
    if (actualSong !== null) {
        audio.play();
        updateControls();
    }
}

// Pause song
function pauseSong() {
    audio.pause();
    updateControls();
}

// Change active class
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a");
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active");
    }
    links[newIndex].classList.add("active");
}

// Change song cover
function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover;
}

// Change song title
function changeSongtitle(songIndex) {
    title.innerText = songList[songIndex].title;
}

// Previous song
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1);
    } else {
        loadSong(songList.length - 1);
    }
}

// Next song
function nextSong() {
    if (actualSong < songList.length - 1) {
        loadSong(actualSong + 1);
    } else {
        loadSong(0);
    }
}

// Initialize
loadSongs();
