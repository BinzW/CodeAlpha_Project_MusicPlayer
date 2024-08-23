const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

let isPlaying = false;
let currentTrackIndex = 0;

const tracks = [
    {
        title: "Song One",
        artist: "Artist One",
        src: "Music/Music1.mp3"
    },
    {
        title: "Song Two",
        artist: "Artist Two",
        src: "Music/Music2.mp3"
    },
    {
        title: "Song Three",
        artist: "Artist Three",
        src: "Music/Music3.mp3"
    }
];

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    title.textContent = track.title;
    artist.textContent = track.artist;
    audio.src = track.src;
}

function playAudio() {
    audio.play();
    isPlaying = true;
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        playAudio();
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        playAudio();
    }
}

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

// Load the first track initially
loadTrack(currentTrackIndex);
