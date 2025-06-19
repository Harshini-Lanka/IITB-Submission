document.addEventListener('DOMContentLoaded', () => {
    const logoCloud = document.querySelector('.logo-cloud');
    if (!logoCloud) return;

    // SVG data for the logos (self-contained, no external files needed)
    const logosSVG = [
        // OpenAI
        `<svg viewBox="0 0 1024 1024"><path d="M433.92 409.6a96.61 96.61 0 0 1-5.12-33.28c0-54.27 43.52-97.28 97.28-97.28s97.28 43.01 97.28 97.28a96.61 96.61 0 0 1-5.12 33.28l80.49 46.44a180.22 180.22 0 0 0 9.22-55.3c0-100.35-81.92-181.25-181.76-181.25s-181.76 80.9-181.76 181.25c0 21.5 3.58 42.5 10.24 62.46l79.36-45.58z m103.43 361.47l-80.49-45.98a96.61 96.61 0 0 1-5.12 33.28c0 54.27 43.52 97.28 97.28 97.28s97.28-43.01 97.28-97.28a96.61 96.61 0 0 1-5.12-33.28l80.49 45.98a180.22 180.22 0 0 0 9.22 55.3c0 100.35-81.92 181.25-181.76 181.25s-181.76-80.9-181.76-181.25c0-21.5 3.58-42.5 10.24-62.46l79.36 45.58a96.61 96.61 0 0 1 5.12-33.28z m-282.63-90.11a180.22 180.22 0 0 0-9.22-55.3c0-100.35 81.92-181.25 181.76-181.25s181.76 80.9 181.76 181.25c0 21.5-3.58 42.5-10.24 62.46l-79.36-45.58a96.61 96.61 0 0 1-5.12-33.28c0-54.27-43.52-97.28-97.28-97.28s-97.28 43.01-97.28 97.28a96.61 96.61 0 0 1 5.12 33.28z m443.39 122.88l-79.36-45.58a97.28 97.28 0 0 1 92.16-52.22h169.98c5.63 0 10.24 4.61 10.24 10.24v163.84a10.24 10.24 0 0 1-10.24 10.24h-169.98a97.28 97.28 0 0 1-92.16-52.22z m-161.28-430.08a97.28 97.28 0 0 1-92.16 52.22H173.06a10.24 10.24 0 0 0-10.24 10.24v163.84a10.24 10.24 0 0 0 10.24 10.24h169.98a97.28 97.28 0 0 1 92.16 52.22l79.36-45.58c-15.36-26.62-25.09-56.32-25.09-88.06s9.73-61.44 25.09-88.06z m-26.62 198.66c-15.87 27.65-25.6 58.37-25.6 90.62s9.73 62.98 25.6 90.62l-79.36 45.58c-15.36-26.62-25.09-56.32-25.09-88.06s9.73-61.44 25.09-88.06z"></path></svg>`,
        // Supercell
        `<svg viewBox="0 0 40 10"><path d="M0 0h10v2H2v6h8v2H0zM15 0h10v2h-8v2h7v2h-7v2h8v2H15zM30 0h10v2h-8v6h8v2H30z"></path></svg>`,
        // Cash App
        `<svg viewBox="0 0 448 512"><path d="M224 122.8c-72.7 0-131.9 42.3-131.9 95.3 0 38.6 28.9 71.5 68.1 86.6 39.2 15.2 58.5 28.7 58.5 47.9 0 19.3-17.6 33.3-48.8 33.3-33.5 0-53.5-14.7-55.8-38.9H16c4.1 57.1 50.4 93.3 112.5 93.3 71.9 0 130.4-42.6 130.4-96.5 0-43.1-29.1-73.1-71.9-88.8-37.5-13.8-55.4-28.5-55.4-46.7 0-16.1 14.6-29.3 45.5-29.3 29.5 0 45.9 13.6 48.1 35.8h96.5c-4.1-55.9-44.6-91.6-104.9-91.6zM224 0C100.3 0 0 100.3 0 224v64c0 106 86 192 192 192h64c106 0 192-86 192-192V224C448 100.3 347.7 0 224 0zm192 288c0 106-86 192-192 192h-64C50.3 480-6.1 400.4.3 294.3c5.4-90.1 79.9-158.4 171.7-158.4h120c88.4 0 160 71.6 160 160v-8z"></path></svg>`,
        // Brex
        `<svg viewBox="0 0 128 128"><path d="M83.43 113.43H14.57v-14.5h54.36L14.57 44.57V0h98.86v14.5h-54.4L113.43 69v44.43zm14.5-84.43H29.07l68.86 68.86V29z"></path></svg>`,
        // Runway
        `<svg viewBox="0 0 549.5 106.5"><path d="M3.25 106.5V2.5h27v33h32V2.5h27v104h-27v-38h-32v38h-27zM157.75 39.5c-19-4-32-15-32-37h28c0 14 7 20 20 23V2.5h27v104h-27V81.5c18 5 31 16 31 37h-28c0-15-8-21-21-24v-55zM263.75 2.5h77v25h-50v14h47v24h-47v16h51v25h-78v-104zM375.25 106.5V2.5h27v104h-27zM448.25 106.5V2.5h100v25h-73v14h70v24h-70v16h74v25h-101z"></path></svg>`,
        // Retool
        `<svg viewBox="0 0 40 10"><path d="M0 0h10v2h-3v2h3v2h-3v2h3v2H0zM15 0h10v2h-8v2h7v2h-7v2h8v2H15zM30 0h10v2h-4v8h-2v-8h-4z"></path></svg>`,
    ];

    // To better fill the screen, we'll duplicate the logos
    const allLogosSVG = [...logosSVG, ...logosSVG, ...logosSVG];

    const logoElements = [];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    allLogosSVG.forEach(svgString => {
        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'logo';
        logoWrapper.innerHTML = svgString;
        
        const minVelocity = 0.1;
        const maxVelocity = 0.4;
        
        // Assign random initial properties for each logo
        const logoData = {
            el: logoWrapper,
            x: Math.random() * screenWidth,
            y: Math.random() * screenHeight,
            vx: (Math.random() * (maxVelocity - minVelocity) + minVelocity) * (Math.random() > 0.5 ? 1 : -1),
            vy: (Math.random() * (maxVelocity - minVelocity) + minVelocity) * (Math.random() > 0.5 ? 1 : -1),
        };

        // Apply initial position
        logoWrapper.style.transform = `translate(${logoData.x}px, ${logoData.y}px)`;
        logoCloud.appendChild(logoWrapper);
        logoElements.push(logoData);
    });

    function animate() {
        logoElements.forEach(logo => {
            // Update position based on velocity
            logo.x += logo.vx;
            logo.y += logo.vy;

            // Screen wrapping logic
            const buffer = 200; // Extra space to ensure logo is fully off-screen before wrapping
            if (logo.x < -buffer) logo.x = screenWidth + buffer;
            if (logo.x > screenWidth + buffer) logo.x = -buffer;
            if (logo.y < -buffer) logo.y = screenHeight + buffer;
            if (logo.y > screenHeight + buffer) logo.y = -buffer;

            // Apply the new transform
            logo.el.style.transform = `translate(${logo.x}px, ${logo.y}px)`;
        });

        // Loop the animation
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();
});