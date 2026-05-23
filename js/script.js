console.log("Nayak Saluja Website Loaded");

/* STICKY NAVBAR */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 50);

});
/* SCROLL REVEAL ANIMATION */

window.addEventListener("scroll", reveal);

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const revealTop = reveals[i].getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}
/* READ MORE TOGGLE */

document.querySelectorAll('.read-more-btn').forEach(button => {

    button.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        /* CLOSE ALL */

        document.querySelectorAll('.partner-bio').forEach(section => {

            if(section !== target){

                section.classList.remove('show-bio');

            }

        });

        /* TOGGLE CURRENT */

        target.classList.toggle('show-bio');

        /* SCROLL */

        if(target.classList.contains('show-bio')){

            target.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        }

    });

});
