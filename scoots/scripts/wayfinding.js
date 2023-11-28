document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');

    if (link.href === window.location.href) {
        link.classList.add('active');
    }
})