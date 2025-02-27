let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const timerButton = document.getElementById("timer-btn");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const albumArt = document.getElementById("album-art");

const songs = [
    { title: "Without Nature Sound", artist: "DanaMusic", src: "sound/without_nature_sound.mp3", img: "images/without_nature_image.avif" },
    { title: "Peaceful Garden", artist: "HarumachiMusic", src: "sound/peaceful-garden.mp3", img: "images/peaxhfull_garden.jfif" },
    { title: "The Waterfall Meditation", artist: "Zehendrew", src: "sound/the-waterfall-meditation.mp3", img: "images/the_waterfall.jfif" },
    { title: "Nature Sound and Flute", artist: "RibhavAgrawal", src: "sound/nature-sound-and-flute.mp3", img: "images/w1.jpg" },
    { title: "Aura", artist: "DayNightMorning", src: "sound/aura.mp3", img: "images/aura.jpg" },
    { title: "Healing Forest", artist: "Light_music", src: "sound/healing-forest.mp3", img: "images/healing-forest.jpg" },
    { title: "Underwater", artist: "NeonMmusic", src: "sound/underwater.mp3", img: "images/underwater.jpg" },
    { title: "Love Meditation", artist: "Ashot-Danielyan", src: "sound/love-meditation.mp3", img: "images/love-meditation.jpg" },
    { title: "Peach of Mind", artist: "Alban_Goah", src: "sound/mm.mp3", img: "images/peach-of-mind.jfif" },
    { title: "Healing Sounds", artist: "RelaxingTime", src: "sound/healing-sounds.mp3", img: "images/healing-sounds.jfif" },
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