document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelector('.hero-elements');
    const fadeStart = 0; // Start fading from the very top
    const fadeEnd = window.innerHeight * 0.6; // Fully faded after scrolling 60% of the screen height

    let ticking = false;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Calculate the progress of the fade
        const progress = Math.min(1, Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart)));
        
        // Calculate opacity (1 to 0)
        const opacity = 1 - progress;

        // Calculate scale (1 to 0.9)
        const scale = 1 - progress * 0.1;

        // Calculate vertical translation (0px to -50px)
        const translateY = -progress * 50;
        
        // Apply the styles
        heroElements.style.opacity = opacity;
        heroElements.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }

    // Use requestAnimationFrame for smooth, performant scroll animations
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call to set the state on page load
    handleScroll();
});