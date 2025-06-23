// Function to load common HTML components
async function loadComponent(placeholderId, componentUrl) {
    try {
        const response = await fetch(componentUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(placeholderId).innerHTML = html;
    } catch (error) {
        console.error(`Failed to load component ${componentUrl}:`, error);
        // Fallback for production: You might want to display a message to the user
        // or load a default content if the fetch fails.
        document.getElementById(placeholderId).innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-md">Error loading ${componentUrl.split('/').pop()}</div>`;
    }
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'header.html');
    loadComponent('sidebar-placeholder', 'sidebar.html');
    loadComponent('footer-placeholder', 'footer.html');

    // Adjust main content padding on resize, especially for sidebar visibility
    const adjustMainContentPadding = () => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            // Tailwind's lg breakpoint is 1024px. The CSS handles the default padding.
            // This JavaScript ensures the padding-right adjusts dynamically for the fixed sidebar.
            if (window.innerWidth >= 1024) {
                mainContent.style.paddingRight = '320px'; // Corresponds to w-80 (20rem * 16px/rem = 320px)
            } else {
                mainContent.style.paddingRight = '1rem'; // Revert to base px-4 (16px) when sidebar is hidden
            }
        }
    };

    // Initial adjustment and add resize listener
    adjustMainContentPadding();
    window.addEventListener('resize', adjustMainContentPadding);
});
