const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

let musicPaused = true;

musicToggle.addEventListener('click', function() {
    if (musicPaused) {
        backgroundMusic.play();
        isMusicPlaying = true;
        musicToggle.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        isMusicPlaying = false;
        musicToggle.textContent = 'Play Music';
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const backgroundMusic = document.getElementById('background-music');
    const musicPosition = localStorage.getItem('musicPosition');

    // Check if music is already playing
    if (!localStorage.getItem('musicPaused')) {
        backgroundMusic.currentTime = parseFloat(musicPosition);
        backgroundMusic.play();
    }

    // Save music state to localStorage when leaving the page
    window.addEventListener('beforeunload', function() {
        if (backgroundMusic.paused) {
            localStorage.setItem('musicPaused', true);
            localStorage.setItem('musicPosition', bgMusic.currentTime);
        } else {
            localStorage.removeItem('musicPaused');
            localStorage.setItem('musicPosition', bgMusic.currentTime);
        }
    });
});
