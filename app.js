

onload = () => {
    alert("This is a one page website... no button is workig for now 😅 just read ");
}



slid_up = document.querySelectorAll('.slideup');


// Add a fade-in effect to the hero section
slid_up.classList.add('animate-fade-in');
// Add a slide-up effect to the hero section
slid_up     .classList.add('animate-slide-up');
// Add a fade-in effect to the hero section
document.addEventListener('DOMContentLoaded', () => {
  const slid_up = document.querySelector('.heros');
  slid_up.classList.add('animate-fade-in');
  slid_up.classList.add('animate-slide-up');
});


gasp = document.querySelector('.gasp');    

    // GSAP animations
gsap.from("#hero-title", {
    y: -50,
    duration: 1.2,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("#hero-subtitle", {
    y: 30,
    delay: 0.3,
    duration: 1,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("#hero-buttons", {
    y: 40,
    delay: 0.6,
    duration: 1,
    opacity: 0,
    ease: "power2.out"
});