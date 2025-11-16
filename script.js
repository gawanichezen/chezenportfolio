const navbarLinks = document.querySelectorAll('.navbar a');

// add click event to each link
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // remove 'active' class from all links
        navbarLinks.forEach(l => l.classList.remove('active'));

        // add 'active' class to the clicked link
        link.classList.add('active');
    });
});