document.addEventListener('DOMContentLoaded', () => {

    // Data for the chart bars
    const projectData = [
        { id: 1, value: 549, type: 'new-build', status: 'estimate' },
        { id: 2, value: 278, type: 'refurbishment', status: 'estimate' },
        { id: 3, value: 875, type: 'new-build', status: 'complete' },
        { id: 4, value: 617, type: 'new-build', status: 'complete' },
        { id: 5, value: 506, type: 'new-build', status: 'complete' },
        { id: 6, value: 36, type: 'refurbishment', status: 'complete' },
        { id: 7, value: 185, type: 'refurbishment', status: 'estimate' },
        { id: 8, value: 191, type: 'refurbishment', status: 'estimate' },
        { id: 9, value: 122, type: 'refurbishment', status: 'complete' },
        { id: 10, value: 550, type: 'new-build', status: 'complete' },
        { id: 11, value: 881, type: 'new-build', status: 'complete' },
        { id: 12, value: 539, type: 'new-build', status: 'complete' },
        { id: 13, value: 269, type: 'refurbishment', status: 'estimate' },
        { id: 14, value: 29, type: 'refurbishment', status: 'complete' },
        { id: 15, value: 82, type: 'refurbishment', status: 'estimate' },
        { id: 16, value: 44, type: 'refurbishment', status: 'complete' },
        { id: 17, value: 109, type: 'refurbishment', status: 'estimate' },
        { id: 18, value: 106, type: 'refurbishment', status: 'estimate' },
        { id: 19, value: 607, type: 'new-build', status: 'complete' },
        { id: 20, value: 528, type: 'new-build', status: 'complete' },
    ];

    const chartArea = document.querySelector('.chart-area');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Store the current filter state
    const filters = {
        type: 'all',
        status: 'all'
    };
    
    // The maximum value on the Y-axis for scaling
    const Y_AXIS_MAX = 1200;

    /**
     * Renders the chart based on the current filters
     */
    function renderChart() {
        // Clear the existing bars
        chartArea.querySelectorAll('.bar-wrapper').forEach(bar => bar.remove());

        // Filter the data based on the selected filters
        const filteredData = projectData.filter(item => {
            const typeMatch = filters.type === 'all' || item.type === filters.type;
            const statusMatch = filters.status === 'all' || item.status === filters.status;
            return typeMatch && statusMatch;
        });

        // Create and append a new bar for each filtered data point
        filteredData.forEach(item => {
            const barWrapper = document.createElement('div');
            barWrapper.className = 'bar-wrapper';

            const bar = document.createElement('div');
            const barHeight = (item.value / Y_AXIS_MAX) * 100;
            bar.className = `bar bar--${item.status}`;
            
            const barLabel = document.createElement('span');
            barLabel.className = 'bar-label';
            barLabel.textContent = item.value;
            
            // Set the final height on the bar element itself, and the label's position
            bar.style.height = `${barHeight}%`;
            barLabel.style.bottom = `${barHeight}%`;

            barWrapper.appendChild(barLabel);
            barWrapper.appendChild(bar);
            chartArea.appendChild(barWrapper);
        });
    }

    /**
     * Handles click events on filter buttons
     * @param {Event} e - The click event
     */
    function handleFilterClick(e) {
        const clickedButton = e.currentTarget;
        const group = clickedButton.dataset.group;
        const value = clickedButton.dataset.value;

        // Update the filter state
        filters[group] = value;

        // Update the active class on buttons within the same group
        document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');

        // Re-render the chart with the new filters
        renderChart();
    }

    // Add event listeners to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // Initial render of the chart on page load
    renderChart();
});