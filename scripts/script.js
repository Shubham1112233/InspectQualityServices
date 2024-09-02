document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a.nav-link');

    // Smooth scrolling for all nav links
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbar = document.querySelector('.navbar-collapse');
                const navbarToggler = document.querySelector('.navbar-toggler');

                // Close the navbar if it's open (on mobile)
                if (navbar.classList.contains('show')) {
                    navbar.classList.remove('show');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }

                // Scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto image slider for the welcome section
    const images = [
        'https://static.vecteezy.com/system/resources/previews/029/230/879/non_2x/industrial-high-tech-equipment-in-production-in-a-workshop-at-a-factory-free-photo.jpg',
        './Images/aa.jpg', // Replace with your second image URL
        './Images/bb.jpg'  // Replace with your third image URL
    ];
    const welcomeSection = document.querySelector('.welcome');
    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        welcomeSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        setTimeout(changeBackgroundImage, 5000); // Change image every 5 seconds
    }

    // Start changing background image after a delay
    setTimeout(changeBackgroundImage, 3000); // Start after 3 seconds




    // Smooth scroll for specific sections
    document.querySelector('a.nav-link[href="#our-services"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo('our-services', 199); // Adjust gapHeight as needed
    });

    document.querySelector('a.nav-link[href="#who-we-are"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo('who-we-are', 60); // Adjust gapHeight as needed
    });

    document.querySelector('a.nav-link[href="#our-customers"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo('our-customers', 200); // Adjust gapHeight as needed
    });

    document.querySelector('a.nav-link[href="#our-structure"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo('our-structure', 210); // Adjust gapHeight as needed
    });

    document.querySelector('a.nav-link[href="#our-team"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo('our-team', 150); // Adjust gapHeight as needed
    });

    document.querySelector('a.nav-link[href="#contact-us"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo('contact-us', 60); // Adjust gapHeight as needed
    });

    document.getElementById('read-more-btn').addEventListener('click', function () {
        const aboutUsSection = document.getElementById('who-we-are');
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    });
    // Slider controls
    let currentIndexSlider = 0;

    document.querySelector('.team-slider-control-next').addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(currentIndexSlider + 1);
    });

    document.querySelector('.team-slider-control-prev').addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(currentIndexSlider - 1);
    });

    function showSlide(index) {
        const items = document.querySelectorAll('.team-slider-item');
        const totalItems = items.length;

        if (index >= totalItems) {
            index = 0;
        } else if (index < 0) {
            index = totalItems - 1;
        }

        currentIndexSlider = index;
        const offset = -currentIndexSlider * 100;
        document.querySelector('.team-slider-inner').style.transform = 'translateX(' + offset + '%)';
    }

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // Calculate increment value
            const increment = target / 200; // 200 increments to reach target within 2 seconds (2000 ms)

            // Increment count and update display
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Update every 10 ms
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
