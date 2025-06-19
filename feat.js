document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const slides = document.querySelectorAll('.slide');
    const progressBar = document.querySelector('.progress-bar');
    const tabsNav = document.querySelector('.tabs-nav');

    let currentIndex = 0;
    let intervalId;

    const DURATION = 5500; // 5.5 seconds for each slide

    function showSlide(index) {
        // Update active classes
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            slide.dataset.slideIndex = i;
        });

        // Update progress bar
        const activeTab = tabs[index];
        if (activeTab) {
            progressBar.style.width = `${activeTab.offsetWidth}px`;
            progressBar.style.left = `${activeTab.offsetLeft}px`;
            
            // Update the theme color for the progress bar
            const activeColor = activeTab.dataset.color;
            tabsNav.style.setProperty('--active-tab-color', activeColor);
        }

        // Handle slide-specific animations
        if (index === 0) { // Billing slide
            const invoicesCounter = document.getElementById('invoices-counter');
            const durationValue = document.getElementById('duration-value');
            
            // Reset values before animating
            invoicesCounter.textContent = '0';
            durationValue.textContent = '42 MIN';

            // Animate invoice counter
            animateCounter(invoicesCounter, 112355, 1500);

            // Animate duration change
            setTimeout(() => {
                if(slides[0].classList.contains('active')) {
                   durationValue.textContent = '45 MIN';
                   durationValue.style.transition = 'opacity 0.3s';
                   durationValue.style.opacity = '0.5';
                   setTimeout(() => durationValue.style.opacity = '1', 100);
                }
            }, 2000);
        }

        currentIndex = index;
    }

    function animateCounter(element, target, duration) {
        let start = 0;
        const stepTime = 20; // ms
        const steps = duration / stepTime;
        const increment = target / steps;
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString('en-US');
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(start).toLocaleString('en-US');
            }
        }, stepTime);
    }
    
    function startCarousel() {
        intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % tabs.length;
            showSlide(nextIndex);
        }, DURATION);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });

    // Initial setup
    showSlide(0);
    startCarousel();
});