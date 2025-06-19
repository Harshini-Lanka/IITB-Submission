document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.hover-trigger');
    const popups = document.querySelectorAll('.popup-container');
    let leaveTimeout;

    triggers.forEach(trigger => {
        const targetId = trigger.dataset.target;
        const targetPopup = document.getElementById(targetId);

        // Function to handle entering a trigger
        const handleMouseEnter = () => {
            clearTimeout(leaveTimeout);

            // Set all other popups to the background state if they were previously shown
            popups.forEach(p => {
                if (p !== targetPopup && (p.classList.contains('active') || p.classList.contains('backgrounded'))) {
                    p.classList.remove('active');
                    p.classList.add('backgrounded');
                }
            });

            // Activate the target popup
            targetPopup.classList.remove('backgrounded');
            targetPopup.classList.add('active');
        };

        // Function to handle leaving a trigger
        const handleMouseLeave = () => {
            leaveTimeout = setTimeout(() => {
                // When mouse leaves for good, background the currently active one
                if (targetPopup.classList.contains('active')) {
                    targetPopup.classList.remove('active');
                    targetPopup.classList.add('backgrounded');
                }
            }, 50); // A small delay to allow moving between triggers smoothly
        };

        trigger.addEventListener('mouseenter', handleMouseEnter);
        trigger.addEventListener('mouseleave', handleMouseLeave);
    });
});