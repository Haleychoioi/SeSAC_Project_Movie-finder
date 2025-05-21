document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".main-title span",
    {
      opacity: 0,
      y: 60,
      scale: 0.3,
      rotate: -180
    },
    {
      opacity: 1,
      y: 0,
      scale: 1.2,
      rotate: 0,
      duration: 1,
      ease: "back.out(2.5)",
      stagger: 0.07
    }
  );

  gsap.to(".main-title span", {
    scale: 1,
    duration: 0.3,
    delay: 1,
    ease: "power2.out",
    stagger: 0.07
  });
});

window.addEventListener("pageshow", function (event) {
  const form = document.querySelector(".movieForm");

  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    if (form) form.reset(); 
  }
});