document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".site-img");
  const dots = document.querySelectorAll(".dot");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    current = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      showSlide(index);
    });
  });
});