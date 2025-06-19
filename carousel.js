document.addEventListener('DOMContentLoaded', () => {
    // Select all product panels
    const panels = document.querySelectorAll('.product-panel');

    // Add event listeners to each panel
    panels.forEach(panel => {
        const video = panel.querySelector('.hover-video');

        if (video) {
            // When the mouse enters the panel, play the video
            panel.addEventListener('mouseenter', () => {
                video.play();
            });

            // When the mouse leaves the panel, pause and reset the video
            panel.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // Rewind to the beginning
            });
        }
    });
});