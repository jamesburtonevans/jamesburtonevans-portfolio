// Simple animation for opening/closing the other portfolio projects section

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-projects-btn');
    const projectsSection = document.getElementById('other-projects');
    if (toggleBtn && projectsSection) {
        // Set initial state
        projectsSection.style.maxHeight = '0px';
        projectsSection.style.overflow = 'hidden';
        projectsSection.style.transition = 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s';
        projectsSection.style.opacity = '0';
        let open = false;
        toggleBtn.addEventListener('click', function() {
            open = !open;
            if (open) {
                projectsSection.style.maxHeight = projectsSection.scrollHeight + 'px';
                projectsSection.style.opacity = '1';
                projectsSection.classList.add('open');
                toggleBtn.classList.add('open'); // Add open class to button for icon rotation
            } else {
                projectsSection.style.maxHeight = '0px';
                projectsSection.style.opacity = '0';
                projectsSection.classList.remove('open');
                toggleBtn.classList.remove('open'); // Remove open class from button
            }
        });
    }
});