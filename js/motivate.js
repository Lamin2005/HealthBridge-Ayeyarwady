let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const timerButton = document.getElementById("timer-btn");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const albumArt = document.getElementById("album-art");

const songs = [
    { title: "Epic Motivation", artist: "Vivaleum", src: "sound/epic-motivation.mp3", img: "images/epic.jpg" },
    { title: "Energizante Motivation", artist: "teodholina", src: "sound/energizante-motivation.mp3", img: "images/focus.jpg" },
    { title: "Ambient Motivation", artist: "SigmaMusicArt", src: "sound/ambient-motivation.mp3", img: "images/getup.jpg" },
    { title: "Aspire Motivation", artist: "AudoCoffee", src: "sound/aspire-motivation.mp3", img: "images/get-your-hopes-up.jpg" },
    { title: "Upbeat", artist: "HitsLab", src: "sound/upbeat.mp3", img: "images/upbeat.png" },
    { title: "Positive Motivation", artist: "Sonican", src: "sound/positive-motivation.mp3", img: "images/believe.jpg" },
    { title: "Motivation", artist: "SigmaMusicArt", src: "sound/motivation.mp3", img: "images/today-is-your.webp" },
    { title: "Workout Motivation", artist: "Novifi", src: "sound/workout-motivation.mp3", img: "images/get.jpg" },
    { title: "Commercial Rock Music", artist: "SigmaMusicArt", src: "sound/commercial-rock-music.mp3", img: "images/rock.jpg" },
    { title: "Trap Motivation", artist: "SigmaMusicArt", src: "sound/trap-motivation.mp3", img: "images/trap.jpg" },
];

function playSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumArt.src = song.img;
    audioPlayer.play();

    // Show controls and audio player
    document.querySelector(".controls").classList.add("show");
    audioPlayer.classList.add("show");

    // Show the timer button
    timerButton.classList.add("show");

    // Change play button to pause icon
    playButton.innerHTML = "&#x23F8;";

    // Update the active playlist item
    updateActivePlaylistItem();
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = "&#x23F8;";
    } else {
        audioPlayer.pause();
        playButton.innerHTML = "&#x23F9;";
    }
}

function previousTrack() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

function nextTrack() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function openTimerPage() {
    const song = songs[currentSongIndex];
    const songTitle = song.title;
    const songSrc = song.src;
    const songImg = song.img;  // Storing the song image
    const timerPageUrl = `timer0.html?song=${encodeURIComponent(songTitle)}&src=${encodeURIComponent(songSrc)}&img=${encodeURIComponent(songImg)}`;
    window.location.href = timerPageUrl;
}

// Update active playlist item
function updateActivePlaylistItem() {
    const playlistItems = document.querySelectorAll(".playlist-item");

    // Remove 'active' class from all items
    playlistItems.forEach((item) => item.classList.remove("active"));

    // Add 'active' class to the selected item
    playlistItems[currentSongIndex].classList.add("active");
}

const playlistItems = document.querySelectorAll(".playlist-item");

playlistItems.forEach((item, index) => {
    item.addEventListener("click", function () {
        // Remove 'active' class from all items
        playlistItems.forEach((i) => i.classList.remove("active"));

        // Add 'active' class to the selected item
        this.classList.add("active");

        playSong(index);
    });
});