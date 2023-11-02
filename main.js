// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentImageIndex = 0;
    let carouselInterval = setInterval(changeImage, 3000);
    let isPlaying = true;

    function showCurrentImage() {
        carouselItems.forEach((item, index) => {
            item.style.display = index === currentImageIndex ? 'block' : 'none';
        });
    }

    function changeImage(next = true) {
        carouselItems[currentImageIndex].style.display = 'none';
        if (next) {
            currentImageIndex = (currentImageIndex + 1) % carouselItems.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + carouselItems.length) % carouselItems.length;
        }
        showCurrentImage();
    }

    document.getElementById('prev').addEventListener('click', () => {
        changeImage(false);
    });

    document.getElementById('next').addEventListener('click', () => {
        changeImage();
    });

    document.getElementById('pause-play').addEventListener('click', () => {
        const pausePlayBtn = document.getElementById('pause-play');
        if (isPlaying) {
            clearInterval(carouselInterval);
            pausePlayBtn.innerHTML = '&#9658;'; // Play character
        } else {
            carouselInterval = setInterval(changeImage, 3000);
            pausePlayBtn.innerHTML = '&#10074;&#10074;'; // Pause character
        }
        isPlaying = !isPlaying;
    });

    // Hamburger menu functionality
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        var navList = document.getElementById('nav-list');
        navList.classList.toggle('active');
    });

    showCurrentImage();
});
