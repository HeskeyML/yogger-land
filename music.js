window.addEventListener('DOMContentLoaded', (event) => {
    const bgMusic = document.getElementById('background-music');

    // Check if music is already playing
    const musicData = localStorage.getItem('bgMusicData');
    const musicPosition = localStorage.getItem('bgMusicPosition');
    
    if (musicData) {
        // Restore music from local storage
        bgMusic.src = musicData;
        bgMusic.currentTime = musicPosition ? parseFloat(musicPosition) : 0; // Set playback position
        bgMusic.play();
    } else {
        // Load music from URL and store it in local storage
        const musicURL = 'url_to_your_music_file.mp3';
        fetch(musicURL)
            .then(response => response.blob())
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                bgMusic.src = objectURL;
                localStorage.setItem('bgMusicData', objectURL);
                bgMusic.play();
            });
    }

    // Save current playback position to local storage periodically
    setInterval(() => {
        localStorage.setItem('bgMusicPosition', bgMusic.currentTime);
    }, 1000); // Save every second (adjust as needed)
});
