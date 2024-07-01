document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Development", "Student"],
        typeSpeed: 30,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        showCursor: false
    });

    const navLinks = document.querySelectorAll('.navlist a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const projectLink = document.querySelector('.navlist a[href="#projects"]');
    const contactLink = document.querySelector('.navlist a[href="#contact"]');

    projectLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.getElementById('portfolio');

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });

 contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.getElementById('contact');

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });

    window.addEventListener('scroll', function() {
        const navlist = document.querySelector('.navlist');
        if (window.scrollY > 0) {
            navlist.classList.add('fixed-nav');
        } else {
            navlist.classList.remove('fixed-nav');
        }
    });
});

