document.addEventListener('DOMContentLoaded', function() {
    // --- Configuration for Banners and Footer (EDIT THESE VALUES) ---
    const config = {
        pageName: "Tanuja Kaadjal Ramsaransing", // Name displayed in the top banner
        bannerImageUrl: "banner.png", // URL for the top banner background image (Navy hex)
        profilePicUrl: "kaadjal.png", // URL for your profile picture (RoyalBlue)
        rightBannerDescription: "Data Analyst | Foodie | Photography Enthousiast | Lifelong Learner", // Short description
        // rightBannerImageText: "Curious about my tech stack?", // Removed: Not needed anymore
        // rightBannerImageLink: "#", // Removed: Not needed anymore
        // rightBannerImageUrl: "https://placehold.co/300x100/000080/FFFFFF?text=Interesting+Fact", // Removed: Not needed anymore
        copyrightText: "© 2025 Kaadjal. All rights reserved.", // Footer copyright text
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/tanuja-ramsaransing-30536b138/", // Replace with your LinkedIn URL
            wellfound: "https://wellfound.com/u/tanuja-ramsaransing",   // Replace with your Wellfound (AngelList) URL
            github: "https://github.com/kaadjal",         // Replace with your GitHub URL
            microsoft: "https://learn.microsoft.com/en-us/users/tanujaramsaransing/",
            // Add more social links here (e.g., twitter: "https://twitter.com/yourhandle")
        },
        skills: [
                "Python", "PowerBI", "Tableau", "SQL", "Data Analysis"
        ]
    };

    // SVG Icons for buttons
    const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.4c-1.5 0-3-.1-4.5-.2H96c-22.1 0-40-17.9-40-40V255.5H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-11 24-11s17 4 24 11L565.8 231.5c7 7 10 15 10 24z"/></svg>`;
    const aboutIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0c-18.7 0-37.5 7-51.7 21.3L21.3 204.3c-28.1 28.1-28.1 73.7 0 101.8l101.8 101.8c28.1 28.1 73.7 28.1 101.8 0L386.7 304.3c28.1-28.1 28.1-73.7 0-101.8L307.7 21.3C293.5 7 274.7 0 256 0zm-7.2 240.2c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zM170.2 365.8c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zm171.6-17.2c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zM365.8 170.2c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zM256 422.8c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0z"/></svg>`;
    const projectsIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.2 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3L441 460.7c-9 16-29.2 21.3-44.2 12.3L360 422.3c-8.5 5.7-18.3 10.3-29.3 13.6c-4.5 1.3-9.1 2.3-13.9 3.1c-1.1 .2-2.2 .4-3.3 .6c-.7 .1-1.4 .2-2.1 .3l-25.2 57.6c-4.6 10.5-16.1 14.6-26.6 10c-7.9-3.5-15.3-7.7-22.4-12.3c-1.3-.8-2.6-1.6-3.9-2.4l-25.1-57.6c-1.3-.3-2.6-.5-4-.8c-8.9-1.5-17.6-4-25.9-7.5c-11-4.6-21.4-10.4-30.8-17.5l-33.1 33.1c-15 9-35.2 3.7-44.2-12.3L15.9 337.3c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.3-1.7-16.8-1.7-25.4s.6-17.1 1.7-25.4l-43.2-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3L71 44.7c9-16 29.2-21.3 44.2-12.3L152 90.3c8.5-5.7 18.3-10.3 29.3-13.6c4.5-1.3 9.1-2.3 13.9-3.1c1.1-.2 2.2-.4 3.3-.6c.7-.1 1.4-.2 2.1-.3l25.2-57.6c4.6-10.5 16.1-14.6 26.6-10c7.9 3.5 15.3 7.7 22.4 12.3c1.3 .8 2.6 1.6 3.9 2.4l25.1 57.6c1.3 .3 2.6 .5 4 .8c8.9 1.5 17.6 4 25.9 7.5c11 4.6 21.4 10.4 30.8 17.5l33.1-33.1c15-9 35.2-3.7 44.2 12.3L495.9 166.6zM256 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>`;
    const photoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 336c-26.5 0-48 21.5-48 48V464H64V128H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H64C28.7 64 0 92.7 0 128V464c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384c0-26.5-21.5-48-48-48zM48 240c0-13.3 10.7-24 24-24H224c13.3 0 24 10.7 24 24V320h128c13.3 0 24 10.7 24 24V464H272V336c0-13.3-10.7-24-24-24H48V240zm464-80V256H368c-13.3 0-24-10.7-24-24V128H448c13.3 0 24 10.7 24 24zM304 96H240c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>`;


    // --- Generate Top Banner HTML ---
    function getTopBannerHTML() {
        return `
            <header class="top-banner" style="background-image: url('${config.bannerImageUrl}');">
                <div class="banner-text">${config.pageName}</div>
            </header>
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
            return `<a href="${url}" target="_blank" class="text-navy hover:text-royal-blue transition duration-300"><i class="${iconClass}"></i></a>`;
        }).join('');

        const skillsHTML = config.skills.map(skill => `
            <span class="inline-block bg-cornflower-blue text-white text-xs px-3 py-1 rounded-full mr-2 mb-2 shadow-sm">${skill}</span>
        `).join('');

        return `
            <aside class="right-banner bg-light-sky-blue shadow-lg rounded-tl-xl rounded-bl-xl p-6 hidden lg:flex flex-col items-center">
                <img src="${config.profilePicUrl}" alt="Your Profile Picture" class="profile-pic mb-6 shadow-md">
                <h2 class="text-2xl font-bold text-navy mb-2">Hello!</h2>
                <p class="text-gray-700 text-sm mb-6">
                    ${config.rightBannerDescription}
                </p>

                <nav class="flex flex-col items-center w-full mb-6">
                    <a href="index.html" class="right-banner-button">
                        ${homeIcon} Home
                    </a>
                    <a href="about.html" class="right-banner-button">
                        ${aboutIcon} About Me
                    </a>
                    <a href="projects.html" class="right-banner-button">
                        ${projectsIcon} Projects
                    </a>
                    <a href="photography.html" class="right-banner-button">
                        ${photoIcon} Photography
                    </a>
                </nav>

                <!-- Removed the image-text-banner section -->

                <div class="social-icons flex justify-center w-full mb-6 space-x-4">
                    ${socialIconsHTML}
                </div>

                <div class="skills-highlight w-full text-center">
                    <h3 class="text-lg font-semibold text-navy mb-3">Skills Highlight</h3>
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
                case 'microsoft': iconClass = 'fab fa-microsoft'; break;
                default: iconClass = 'fas fa-link';
            }
            return `<a href="${url}" target="_blank" class="hover:text-dodger-blue transition duration-300"><i class="${iconClass}"></i></a>`;
        }).join('');

        return `
            <footer class="footer bg-navy text-white shadow-lg">
                <div class="footer-nav-row">
                    <a href="index.html">Home</a>
                    <a href="projects.html">Projects</a>
                    <a href="photography.html">Photography</a>
                    <a href="about.html">About Me</a>
                </div>
                <div class="footer-social-copyright-row">
                    <div class="social-links-footer">
                        ${socialLinksHTML}
                    </div>
                    <p class="copyright-text">${config.copyrightText}</p>
                </div>
            </footer>
        `;
    }

    // --- Inject the elements into the DOM ---
    const topBannerPlaceholder = document.getElementById('top-banner-placeholder');
    if (topBannerPlaceholder) {
        topBannerPlaceholder.innerHTML = getTopBannerHTML();
    }

    // Removed nav-bar-placeholder injection

    const rightBannerPlaceholder = document.getElementById('right-banner-placeholder');
    if (rightBannerPlaceholder) {
        rightBannerPlaceholder.innerHTML = getRightBannerHTML();
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
        const footer = footerPlaceholder.querySelector('.footer');

        // Scroll event listener for the footer visibility
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const totalHeight = document.body.offsetHeight; // Use document.body.offsetHeight for total page height
            const scrollThreshold = 100; // Show footer when 100px from the bottom

            if (scrollPosition >= totalHeight - scrollThreshold) {
                footer.style.opacity = '1';
                footer.style.pointerEvents = 'auto';
            } else {
                footer.style.opacity = '0';
                footer.style.pointerEvents = 'none';
            }
        });

        // Trigger scroll event once on load to check initial position (for short pages)
        window.dispatchEvent(new Event('scroll'));
    }

    // --- Image Resize Functionality (for large blog/project images) ---
    function setupResponsiveImages() {
        document.querySelectorAll('.main-content-wrapper img.large-image').forEach(img => {
            console.log(`Processing image: ${img.src}`);
        });
    }

    setupResponsiveImages();
});
