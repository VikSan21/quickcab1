
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('.home-section');
    const images = [
        'resources/images/a.jpg',
        'resources/images/b.jpg',
        'resources/images/ummed.webp',
        'resources/images/mandor.jpg',
        'resources/images/ummed1.webp',
        'resources/images/m.jpg',

    ]
        
    let currentIndex = 0;

    // Preload images
    images.forEach((img) => {
        const image = new Image();
        image.src = img;
    });

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
        console.log(`url(${images[currentIndex]})`)
    }

    setInterval(changeBackground, 3000); // Change image every 3 seconds
});
