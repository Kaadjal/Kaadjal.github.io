// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Function to load HTML content into a placeholder
    async function loadComponent(placeholderId, htmlContent) {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = htmlContent;
        }
    }

    // Common HTML for the Top Banner
    const topBannerHTML = `
        <header class="top-banner relative flex items-center justify-center rounded-b-lg shadow-xl">
            <h1 class="relative z-10 text-white text-3xl md:text-4xl font-bold rounded-lg p-2 bg-navy bg-opacity-70">Tanuja Kaadjal Ramsaransing</h1>
        </header>
    `;

    // Common HTML for the Right-Side Banner
    const rightBannerHTML = `
        <aside class="right-banner p-4 flex flex-col items-center shadow-2xl rounded-l-lg overflow-y-hidden">
            <div class="mb-6">
                <img src="kaadjal.png" class="w-32 h-32 rounded-full object-cover border-4 border-dodgerblue shadow-lg">
            </div>

            <h2 class="text-xl font-bold text-white mb-2">Your Name</h2>
            <p class="text-white text-center text-sm mb-4">Web Developer | Blogger | Photographer</p>

            <!-- Social Media Links (Right Banner) -->
            <div class="flex space-x-4 mb-8">
                <a href="https://www.linkedin.com/in/tanuja-ramsaransing-30536b138/" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="https://github.com/kaadjal" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-github text-2xl"></i>
                </a>
                <a href="https://wellfound.com/u/tanuja-ramsaransing" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-angellist text-2xl"></i> <!-- Font Awesome for Wellfound (AngelList) -->
                </a>
                <!-- Add more social links as needed -->
                <a href="https://learn.microsoft.com/en-us/users/tanujaramsaransing/" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-microsoft text-2xl"></i>
                </a>
            </div>

            <!-- Highlighted Skills -->
            <div class="w-full mb-8">
                <h3 class="text-lg font-semibold text-white mb-3 text-center">Skills</h3>
                <ul class="text-white text-sm list-disc list-inside space-y-1">
                    <li class="rounded-md px-2 py-1 bg-dodgerblue bg-opacity-70 mb-1">PowerBI</li>
                    <li class="rounded-md px-2 py-1 bg-dodgerblue bg-opacity-70 mb-1">Tableau</li>
                    <li class="rounded-md px-2 py-1 bg-dodgerblue bg-opacity-70 mb-1">Python</li>
                    <li class="rounded-md px-2 py-1 bg-dodgerblue bg-opacity-70 mb-1">HTML/CSS</li>
                    <li class="rounded-md px-2 py-1 bg-dodgerblue bg-opacity-70 mb-1">SQL</li>
                    <li class="rounded-md px-2 py-1 bg-dodgerblue bg-opacity-70 mb-1">Cloud Platforms</li>
                </ul>
            </div>

            <!-- Navigation Buttons -->
            <div class="w-full flex flex-col space-y-4">
                <a href="index.html" class="nav-button">
                    <i class="fas fa-home text-xl">home.png</i>
                    <span>Home</span>
                </a>
                <a href="projects.html" class="nav-button">
                    <i class="fas fa-tasks text-xl">projects.png</i>
                    <span>Projects</span>
                </a>
                <a href="photography.html" class="nav-button">
                    <i class="fas fa-camera-retro text-xl">photo.png</i>
                    <span>Photography</span>
                </a>
                <a href="about.html" class="nav-button">
                    <i class="fas fa-user text-xl">about.png</i>
                    <span>About Me</span>
                </a>
            </div>
        </aside>
    `;

    // Common HTML for the Footer
    const footerHTML = `
        <footer class="footer-section text-center shadow-inner rounded-t-lg">
            <!-- Navigation Links -->
            <div class="flex justify-center space-x-6 mb-4 text-sm md:text-base">
                <a href="index.html" class="text-white hover:text-lightskyblue transition-colors duration-300">Home</a>
                <span class="text-white">|</span>
                <a href="about.html" class="text-white hover:text-lightskyblue transition-colors duration-300">About Me</a>
                <span class="text-white">|</span>
                <a href="projects.html" class="text-white hover:text-lightskyblue transition-colors duration-300">Projects</a>
                <span class="text-white">|</span>
                <a href="photography.html" class="text-white hover:text-lightskyblue transition-colors duration-300">Photography</a>
            </div>

            <!-- Social Media and Copyright -->
            <div class="flex items-center justify-center space-x-4 mb-2">
                <a href="https://www.linkedin.com/in/tanuja-ramsaransing-30536b138/" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="https://github.com/kaadjal" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-github text-xl"></i>
                </a>
                <a href="https://wellfound.com/u/tanuja-ramsaransing" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-angellist text-xl"></i>
                </a>
                <!-- Add more social links as needed -->
                <a href="https://learn.microsoft.com/en-us/users/tanujaramsaransing/" target="_blank" class="text-white hover:text-dodgerblue transition-colors duration-300">
                    <i class="fab fa-microsoft text-xl"></i>
                </a>
            </div>
            <p class="text-white text-xs md:text-sm">&copy; 2024 Your Name. All rights reserved.</p>
        </footer>
    `;

    // Load components
    loadComponent('top-banner-placeholder', topBannerHTML);
    loadComponent('right-banner-placeholder', rightBannerHTML);
    loadComponent('footer-placeholder', footerHTML);

    // Footer visibility logic based on scroll
    const footer = document.querySelector('.footer-section');
    if (footer) {
        const toggleFooterVisibility = () => {
            // Check if the user has scrolled near the bottom of the page
            // (document.documentElement.scrollHeight - window.innerHeight) is the maximum scrollable height
            // window.scrollY is the current scroll position
            const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight - 200; // 200px from bottom
            if (window.scrollY >= scrollThreshold) {
                footer.classList.add('show');
            } else {
                footer.classList.remove('show');
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', toggleFooterVisibility);

        // Also check on initial load in case the page is short
        toggleFooterVisibility();
    }
});

    setupResponsiveImages();
});
