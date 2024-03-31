function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

let isMusicPlaying = true;

musicToggle.addEventListener('click', function() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        musicToggle.textContent = 'Play Music';
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        musicToggle.textContent = 'Pause Music';
    }
});
