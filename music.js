const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

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
    
    const bgMusic = document.getElementById('background-music');
    const musicPosition = localStorage.getItem('musicPosition');


    // Check if music is already playing
    if (!localStorage.getItem('musicPaused')) {
        bgMusic.currentTime = parseFloat(musicPosition);
        bgMusic.play();
        isMusicPlaying = true;
        musicToggle.textContent = 'Pause Music';
    }
    // Save music state to localStorage when leaving the page
    window.addEventListener('beforeunload', function() {
        if (bgMusic.paused) {
            localStorage.setItem('musicPaused', true);
            localStorage.setItem('musicPosition', bgMusic.currentTime);
        } else {
            localStorage.removeItem('musicPaused');
            localStorage.setItem('musicPosition', bgMusic.currentTime);
        }
    });
});
