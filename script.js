// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation and submission handling
document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formEntries = Object.fromEntries(formData.entries());

    if (!formEntries.name || !formEntries.email || !formEntries.message) {
        alert('Please fill out all fields.');
        return;
    }

    try {
        console.log('Form submitted:', formEntries);
        alert('Message sent successfully!');
        this.reset();
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again later.');
    }
});

// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.enlarge-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const overlay = document.getElementById('overlay');
            const enlargedImg = document.getElementById('enlarged-img');
            const images = document.querySelectorAll('.gallery .recent-item img.small');
            let currentIndex = index;

            function showImage(index) {
                enlargedImg.src = images[index].src;
            }

            function closeOverlay() {
                overlay.style.display = 'none';
                document.removeEventListener('keydown', handleKeydown);
            }

            function handleKeydown(event) {
                if (event.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % images.length;
                    showImage(currentIndex);
                } else if (event.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    showImage(currentIndex);
                } else if (event.key === 'Escape') {
                    closeOverlay();
                }
            }

            document.getElementById('prev-button').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            document.getElementById('next-button').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            document.getElementById('close-button').addEventListener('click', closeOverlay);

            showImage(currentIndex);
            overlay.style.display = 'flex';
            document.addEventListener('keydown', handleKeydown);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Hide Back-to-Top button initially
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.opacity = '0';

    // Show Back-to-Top button with animation after a delay
    setTimeout(() => {
        backToTopButton.style.transition = 'opacity 0.3s ease';
        backToTopButton.style.opacity = '1';
    }, 1000); // Adjust the delay as needed
});

// Back-to-Top button click event
document.getElementById('back-to-top').addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    let touchstartX = 0;
    let touchendX = 0;

    const slider = document.querySelectorAll('.recent-item'); // Assuming '.recent-item' are your gallery items

    slider.forEach(item => {
        item.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
        }, false);

        item.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleSwipe(item);
        }, false);
    });

    function handleSwipe(item) {
        if (touchendX < touchstartX) {
            // Swipe left
            showNextImage(item);
        }
        if (touchendX > touchstartX) {
            // Swipe right
            showPrevImage(item);
        }
    }

    function showNextImage(item) {
        // Logic to show the next image in the gallery
        const nextButton = document.getElementById('next-button');
        if (nextButton) {
            nextButton.click(); // Simulate a click on the "next" button
        }
    }

    function showPrevImage(item) {
        // Logic to show the previous image in the gallery
        const prevButton = document.getElementById('prev-button');
        if (prevButton) {
            prevButton.click(); // Simulate a click on the "prev" button
        }
    }
});



