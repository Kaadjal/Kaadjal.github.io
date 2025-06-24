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


 // SVG Icons (consolidated for both right-side banner and footer)
    const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.4c-1.5 0-3-.1-4.5-.2H96c-22.1 0-40-17.9-40-40V255.5H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-11 24-11s17 4 24 11L565.8 231.5c7 7 10 15 10 24z"/></svg>`;
    const aboutIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0c-18.7 0-37.5 7-51.7 21.3L21.3 204.3c-28.1 28.1-28.1 73.7 0 101.8l101.8 101.8c28.1 28.1 73.7 28.1 101.8 0L386.7 304.3c28.1-28.1 28.1-73.7 0-101.8L307.7 21.3C293.5 7 274.7 0 256 0zm-7.2 240.2c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zM170.2 365.8c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zm171.6-17.2c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zM365.8 170.2c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0zM256 422.8c-5.1 5.1-5.1 13.4 0 18.5l3.5 3.5c5.1 5.1 13.4 5.1 18.5 0l3.5-3.5c5.1-5.1 5.1-13.4 0-18.5l-3.5-3.5c-5.1-5.1-13.4-5.1-18.5 0z"/></svg>`;
    const projectsIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V224H448V160H512V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64V32l64 64H384zm-64 80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM176 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`; // Folder icon for projects
    const photoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M144 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM320 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128H0zm416 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM176 176c-4.4 0-8.8 .7-13 2.1L64 218.7V304c0 35.3 28.7 64 64 64s64-28.7 64-64V240c0-22.1-17.9-40-40-40zm16-64c-4.4 0-8.8 .7-13 2.1L64 154.7V240c0-35.3 28.7-64 64-64s64-28.7 64-64V112zM320 176a48 48 0 1 0 0 96 48 48 0 1 0 0-96z"/></svg>`; // Camera icon for photography

    // Background images for right-side banner buttons
    const homeBgImage = "home.png"; // DodgerBlue variant
    const aboutBgImage = "about.png"; // RoyalBlue variant
    const projectsBgImage = "projects.png"; // CornflowerBlue variant
    const photographyBgImage = "photo.png"; // Navy variant

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
                    <a href="index.html" class="right-banner-button" style="background-image: url('${homeBgImage}');">
                        ${homeIcon} Home
                    </a>
                    <a href="about.html" class="right-banner-button" style="background-image: url('${aboutBgImage}');">
                        ${aboutIcon} About Me
                    </a>
                    <a href="projects.html" class="right-banner-button" style="background-image: url('${projectsBgImage}');">
                        ${projectsIcon} Projects
                    </a>
                    <a href="photography.html" class="right-banner-button" style="background-image: url('${photographyBgImage}');">
                        ${photoIcon} Photography
                    </a>
                </nav>

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
                    <a href="index.html" class="footer-nav-link">
                        ${homeIcon} Home
                    </a>
                    <a href="projects.html" class="footer-nav-link">
                        ${projectsIcon} Projects
                    </a>
                    <a href="photography.html" class="footer-nav-link">
                        ${photoIcon} Photography
                    </a>
                    <a href="about.html" class="footer-nav-link">
                        ${aboutIcon} About Me
                    </a>
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
            const totalHeight = document.body.offsetHeight;
            const scrollThreshold = 100;

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
