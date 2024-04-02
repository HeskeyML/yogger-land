window.addEventListener('DOMContentLoaded', (event) => {
    const bgMusic = document.getElementById('background-music');
    
    // Check if music data and playback position are stored in localStorage
    const musicData = localStorage.getItem('bgMusicData');
    const musicPosition = parseFloat(localStorage.getItem('bgMusicPosition'));

    if (musicData) {
        // Restore music from local storage
        bgMusic.src = musicData;
        if (!isNaN(musicPosition)) {
            bgMusic.currentTime = musicPosition; // Set playback position
        }
        if (!localStorage.getItem('musicPaused')) {
            bgMusic.play();
        }
    }

    // Save music state and playback position to localStorage when leaving the page
    window.addEventListener('beforeunload', function() {
        if (bgMusic.paused) {
            localStorage.setItem('musicPaused', true);
        } else {
            localStorage.removeItem('musicPaused');
        }
        localStorage.setItem('bgMusicPosition', bgMusic.currentTime);
    });
});
