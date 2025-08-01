document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.content-section');
    const portfolioFile = document.querySelector('.portfolio-file');

    document.getElementById('home').classList.remove('hidden');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.getAttribute('data-section');

            // --- 1. Update Tabs ---
            // Remove 'active' class from all tabs
            tabLinks.forEach(link => link.classList.remove('active', 'lavender-theme'));
            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // --- 2. Update Content Sections ---
            // Hide all sections
            contentSections.forEach(section => section.classList.add('hidden'));
            // Show the target section
            document.getElementById(sectionId).classList.remove('hidden');

            // --- 3. Update Background Color Based on Section ---
            if (sectionId === 'about' || sectionId === 'projects') {
                portfolioFile.classList.add('lavender-theme');
                tab.classList.add('lavender-theme'); 
            } else {
                portfolioFile.classList.remove('lavender-theme');
            }
        });
    });
});