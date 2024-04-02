const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
localStorage.setItem('musicPosition', bgMusic.currentTime);

let musicPosition = 0.000
let isMusicPlaying = false;

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

window.addEventListener('DOMContentLoaded', (event) => {
    
    // const bgMusic = document.getElementById('background-music');
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
