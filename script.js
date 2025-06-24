document.addEventListener('DOMContentLoaded', function() {
    // --- Configuration for Banners and Footer (EDIT THESE VALUES) ---
    const config = {
        pageName: "Tanuja Kaadjal Ramsaransing", // Name displayed in the top banner
        bannerImageUrl: "banner.png", // URL for the top banner background image
        profilePicUrl: "kaadjal.png", // URL for your profile picture in the right banner
        rightBannerImageText: "Photography", // Text for the small image banner
        rightBannerImageLink: "photography.html", // Link for the small image banner
        rightBannerImageUrl: "photo.png", // URL for the small image banner background
        copyrightText: "© 2025 Kaadjal. All rights reserved.", // Footer copyright text
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/tanuja-ramsaransing-30536b138/", // Replace with your LinkedIn URL
            wellfound: "https://wellfound.com/u/tanuja-ramsaransing",   // Replace with your Wellfound (AngelList) URL
            github: "https://github.com/kaadjal",         // Replace with your GitHub URL
            microsoft: "https://learn.microsoft.com/en-us/users/tanujaramsaransing/",
            // Add more social links here (e.g., twitter: "https://twitter.com/yourhandle")
        },
        skills: [
            "Python", "PowerBI", "Tableau", "SQL", "Data Analysis", 
        ]
    };

    // --- Generate Top Banner HTML ---
    function getTopBannerHTML() {
        return `
            <header class="top-banner" style="background-image: url('${config.bannerImageUrl}');">
                <div class="banner-text">${config.pageName}</div>
            </header>
        `;
    }

    // --- Generate Navigation Bar HTML ---
    // This new function creates the horizontal navigation buttons
    function getNavBarHTML() {
        return `
            <nav class="nav-bar-container bg-cornflower-blue shadow-lg">
                <a href="index.html" class="nav-button">Home</a>
                <a href="projects.html" class="nav-button">Projects</a>
                <a href="photography.html" class="nav-button">Photography</a>
                <a href="about.html" class="nav-button">About Me</a>
            </nav>
        `;
    }

    // --- Generate Right-Side Banner HTML ---
    function getRightBannerHTML() {
        const socialIconsHTML = Object.entries(config.socialMedia).map(([platform, url]) => {
            let iconClass = '';
            switch (platform) {
                case 'linkedin': iconClass = 'fab fa-linkedin'; break;
                case 'wellfound': iconClass = 'fab fa-angellist'; break; // Font Awesome icon for AngelList (Wellfound)
                case 'github': iconClass = 'fab fa-github'; break;
                case 'microsoft': iconClass = 'fab fa-microsoft'; break;    
                // Add more cases for other platforms as needed
                default: iconClass = 'fas fa-link'; // Default generic link icon
            }
            return `<a href="${url}" target="_blank" class="hover:text-cornflower-blue transition duration-300"><i class="${iconClass}"></i></a>`;
        }).join('');

        const skillsHTML = config.skills.map(skill => `
            <span class="inline-block bg-cornflower-blue text-white text-xs px-3 py-1 rounded-full mr-2 mb-2 shadow-sm">${skill}</span>
        `).join('');

        return `
            <aside class="right-banner bg-light-sky-blue shadow-lg rounded-tl-xl rounded-bl-xl p-6 hidden lg:flex flex-col items-center">
                <img src="${config.profilePicUrl}" alt="Your Profile Picture" class="profile-pic mb-6 shadow-md">
                <h2 class="text-2xl font-bold text-dark-blue mb-4">Kaadjal</h2>
                <p class="text-gray-700 text-sm mb-6">
                    Data Analyst | Data Scientist | Tech Enthousiast | Lifelong Learner
                </p>
                <!-- Navigation buttons removed from here -->

                <div class="image-text-banner relative flex items-center justify-center p-4 rounded-xl my-6 overflow-hidden"
                     style="background-image: url('${config.rightBannerImageUrl}');">
                    <a href="${config.rightBannerImageLink}" target="_blank" class="image-text-banner-content text-white font-semibold text-lg text-center relative z-20 hover:underline">
                        ${config.rightBannerImageText}
                    </a>
                </div>

                <div class="social-icons flex justify-center w-full mb-6 space-x-4">
                    ${socialIconsHTML}
                </div>

                <div class="skills-highlight w-full text-center">
                    <h3 class="text-lg font-semibold text-dark-blue mb-3">Skills Highlight</h3>
                    <div class="flex flex-wrap justify-center">
                        ${skillsHTML}
                    </div>
                </div>
            </aside>
        `;
    }

    // --- Generate Footer HTML ---
    function getFooterHTML() {
        const socialLinksHTML = Object.entries(config.socialMedia).map(([platform, url]) => {
            let iconClass = '';
            switch (platform) {
                case 'linkedin': iconClass = 'fab fa-linkedin'; break;
                case 'wellfound': iconClass = 'fab fa-angellist'; break;
                case 'github': iconClass = 'fab fa-github'; break;
                default: iconClass = 'fas fa-link';
            }
            return `<a href="${url}" target="_blank" class="hover:text-sky-blue transition duration-300"><i class="${iconClass}"></i></a>`;
        }).join('');

        return `
            <footer class="footer bg-steel-blue text-white shadow-lg">
                <p class="copyright-text">${config.copyrightText}</p>
                <div class="footer-links-row flex justify-center items-center mt-2">
                    <div class="social-links flex mr-4">
                        ${socialLinksHTML}
                    </div>
                    <div class="about-link">
                        <a href="about.html" class="hover:underline transition duration-300">About Me</a>
                    </div>
                </div>
            </footer>
        `;
    }

    // --- Inject the elements into the DOM ---
    const topBannerPlaceholder = document.getElementById('top-banner-placeholder');
    if (topBannerPlaceholder) {
        topBannerPlaceholder.innerHTML = getTopBannerHTML();
    }

    // NEW: Inject Navigation Bar
    const navBarPlaceholder = document.getElementById('nav-bar-placeholder');
    if (navBarPlaceholder) {
        navBarPlaceholder.innerHTML = getNavBarHTML();
    }

    const rightBannerPlaceholder = document.getElementById('right-banner-placeholder');
    if (rightBannerPlaceholder) {
        rightBannerPlaceholder.innerHTML = getRightBannerHTML();
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
        // Removed the scroll event listener as the footer is no longer fixed
    }

    // --- Image Resize Functionality (for large blog/project images) ---
    function setupResponsiveImages() {
        document.querySelectorAll('.main-content-wrapper img.large-image').forEach(img => {
            console.log(`Processing image: ${img.src}`);
        });
    }

    setupResponsiveImages();
});
