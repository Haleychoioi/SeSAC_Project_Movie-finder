document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".main-title span", {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    duration: 1,
    ease: "back.out(2.5)",
    stagger: 0.1
  });
});

const floatingNav = document.querySelector(".floating-nav");

floatingNav.addEventListener("mouseenter", () => {
  gsap.to(floatingNav, {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    duration: 0.3,
    ease: "power1.out"
  });
});

floatingNav.addEventListener("mouseleave", () => {
  gsap.to(floatingNav, {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    duration: 0.3,
    ease: "power1.out"
  });
});
