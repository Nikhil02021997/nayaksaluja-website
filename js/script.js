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