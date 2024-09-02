document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a.nav-link');

    // Smooth scrolling for all nav links with offset adjustment
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

                // Smooth scroll to the target element with offset
                smoothScrollTo(targetElement, 60); // Adjust offset value as needed
            }
        });
    });

    // Smooth scroll function with an offset
    function smoothScrollTo(targetElement, offset = 0) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

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

    // Attach specific scroll events for each section with a gapHeight
    document.querySelector('a.nav-link[href="#our-services"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo(document.getElementById('our-services'), 259);
    });

    document.querySelector('a.nav-link[href="#who-we-are"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo(document.getElementById('who-we-are'), 60);
    });

    document.querySelector('a.nav-link[href="#our-clients"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo(document.getElementById('our-clients'), 200);
    });

    document.querySelector('a.nav-link[href="#our-team"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo(document.getElementById('our-team'), 150);
    });

    document.querySelector('a.nav-link[href="#contact-us"]').addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollTo(document.getElementById('contact-us'), 60);
    });

    // Event for "Read More" button
    document.getElementById('read-more-btn').addEventListener('click', function () {
        smoothScrollTo(document.getElementById('who-we-are'), 60);
    });

    // Event for "How Can We Help" button
    document.getElementById('read-more-btn1').addEventListener('click', function () {
        smoothScrollTo(document.getElementById('drop-message'), 60);
    });

    // Counter animation for statistics
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


});
