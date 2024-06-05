document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('gallery');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    scrollLeft.addEventListener('click', function() {
        scrollContainer.scrollBy({
            left: -500,
            behavior: 'smooth'
        });
    });

    scrollRight.addEventListener('click', function() {
        scrollContainer.scrollBy({
            left: 500,
            behavior: 'smooth'
        });
    });
});