// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Load common HTML partials when the DOM is ready
    loadPartials();
    // Set up the scroll listener for footer visibility
    setupFooterVisibility();
});

/**
 * Asynchronously loads HTML partials into designated placeholders.
 * Fetches _header.html, _sidebar.html, and _footer.html and inserts their content.
 */
async function loadPartials() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        try {
            const response = await fetch('_header.html');
            if (response.ok) {
                headerPlaceholder.innerHTML = await response.text();
            } else {
                console.error('Failed to load _header.html:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching _header.html:', error);
        }
    }

    if (sidebarPlaceholder) {
        try {
            const response = await fetch('_sidebar.html');
            if (response.ok) {
                sidebarPlaceholder.innerHTML = await response.text();
            } else {
                console.error('Failed to load _sidebar.html:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching _sidebar.html:', error);
        }
    }

    if (footerPlaceholder) {
        try {
            const response = await fetch('_footer.html');
            if (response.ok) {
                footerPlaceholder.innerHTML = await response.text();
            } else {
                console.error('Failed to load _footer.html:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching _footer.html:', error);
        }
    }
}

/**
 * Manages the visibility of the footer based on scroll position.
 * The footer appears when the user scrolls near the bottom of the page.
 */
function setupFooterVisibility() {
    const footer = document.getElementById('footer-placeholder');
    if (!footer) {
        console.warn('Footer placeholder not found, footer visibility will not be managed.');
        return;
    }

    const showFooterOnScroll = () => {
        // Calculate the scroll position
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Define a threshold from the bottom of the page
        // The footer will appear when the user is within this distance from the bottom.
        const threshold = 250; // pixels from the bottom of the document to show footer

        if (scrollY + viewportHeight >= documentHeight - threshold) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    };

    // Initial check in case the page loads already scrolled to the bottom
    showFooterOnScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', showFooterOnScroll);
}
