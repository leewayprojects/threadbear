console.log("=== SCRIPT STARTING ===");

// Wait for DOM to be fully ready
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Content Loaded");

  // ======================
  // TO TOP BUTTON
  // ======================
  const toTopButton = document.getElementById("to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      toTopButton.classList.add("show");
    } else {
      toTopButton.classList.remove("show");
    }
  });

  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth"
    });
  });

  console.log("=== SCRIPT FILE LOADED ===");
});