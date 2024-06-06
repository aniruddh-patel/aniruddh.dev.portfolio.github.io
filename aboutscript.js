

document.getElementById('hamburger-menu').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('visible');
    } else {
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
    }
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
    });
});
document.querySelector('.close-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden');
});

