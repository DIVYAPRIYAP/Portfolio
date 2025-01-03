// Smooth Scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('.footer p');
    if (footerYear) {
        footerYear.innerHTML = `&copy; Divya Priya ${new Date().getFullYear()}. All rights reserved.`;
    }
});
