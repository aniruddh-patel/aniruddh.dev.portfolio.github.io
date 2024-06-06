const dynamicText = document.getElementById('dynamic-text');
const jobTitles = ['Full Stack Developer', '3D Artist', 'UI/UX Designer', 'AWS Traine', 'DevOps Traine'];
let jobIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
    const currentJob = jobTitles[jobIndex];
    let displayText = currentJob.substring(0, charIndex);

    dynamicText.textContent = displayText;

    if (!isDeleting && charIndex < currentJob.length) {
        charIndex++;
        delay = 50;  // Typing speed
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        delay = 50;  // Deleting speed
    } else if (!isDeleting && charIndex === currentJob.length) {
        delay = 1000; // Delay before start deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        delay = 500; // Delay before start typing next job title
        isDeleting = false;
        jobIndex = (jobIndex + 1) % jobTitles.length;
    }

    setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

document.getElementById('theme-switcher').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});


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

