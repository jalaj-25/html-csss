document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.getElementById('scrollArrow');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollArrow.style.opacity = "1";
        } else {
            scrollArrow.style.opacity = "0";
        }
    };

    // Smooth scroll to top when arrow is clicked
    scrollArrow.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
