window.addEventListener('DOMContentLoaded', (event) => {
    const bgMusic = document.getElementById('bg-music');

    // Check if music is already playing
    if (!localStorage.getItem('musicPaused')) {
        bgMusic.play();
    }

    // Save music state to localStorage when leaving the page
    window.addEventListener('beforeunload', function() {
        if (bgMusic.paused) {
            localStorage.setItem('musicPaused', true);
        } else {
            localStorage.removeItem('musicPaused');
        }
    });
});
