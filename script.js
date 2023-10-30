/*============== toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Correct the selector

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*============== scroll sections avtive link=====================*/
let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
        let top =window.scrollY;
        let offset= sec.offsetTop;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });


        };
     });

    //  sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

    
/*==============Remove toggle icon navbar when click navbar link (scroll)=====================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*==============scroll reveal=====================*/

ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top', // Corrected placement within the options object
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom', // Corrected placement within the options object
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  ScrollReveal().reveal('.home-content h1, .about-image', {
    origin: 'left', // Corrected placement within the options object
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right', // Corrected placement within the options object
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  /*==============typed js=====================*/
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
