document.querySelectorAll(".flip-card").forEach(card => {
  const inner = card.querySelector(".flip-inner");

  card.addEventListener("mouseenter", () => {
    gsap.to(inner, { duration: 0.6, rotateY: 180 });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(inner, { duration: 0.6, rotateY: 0 });
  });
});