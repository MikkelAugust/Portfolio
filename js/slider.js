

document.addEventListener("DOMContentLoaded", () => {
  const slideTrack = document.querySelector("[data-project-slides]");

  const slides = [
    { href: "https://gamehub-shop.netlify.app/", imgSrc: "/img/slider/Gamehub1.png", alt: "GameHub image" },
    { href: "https://gamehub-shop.netlify.app/", imgSrc: "/img/slider/Gamehub2.png", alt: "GameHub image" },
    { href: "https://gamehub-shop.netlify.app/", imgSrc: "/img/slider/Gamehub3.png", alt: "GameHub image" },
    { href: "https://gamehub-shop.netlify.app/", imgSrc: "/img/slider/Gamehub4.png", alt: "GameHub image" },
    { href: "https://csm-eh.netlify.app/", imgSrc: "", alt: "Community Science Museum image" },
    { href: "https://csm-eh.netlify.app/", imgSrc: "", alt: "Community Science Museum image" },
    { href: "https://csm-eh.netlify.app/", imgSrc: "", alt: "Community Science Museum image" },
    { href: "https://csm-eh.netlify.app/", imgSrc: "", alt: "Community Science Museum image" },
    { href: "https://hotview-labs-blog.netlify.app/", imgSrc: "/img/slider/HVL1.png", alt: "HotViewLab image" },
    { href: "https://hotview-labs-blog.netlify.app/", imgSrc: "/img/slider/HVL2.png", alt: "HotViewLab image" },
    { href: "https://hotview-labs-blog.netlify.app/", imgSrc: "/img/slider/HVL3.png", alt: "HotViewLab image" },
    { href: "https://hotview-labs-blog.netlify.app/", imgSrc: "/img/slider/HVL4.png", alt: "HotViewLab image" }
  ];

  slides.forEach(({ href, imgSrc, alt }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = href;
    a.target = "_blank";
    img.src = imgSrc;
    img.alt = alt;
    img.classList.add("carousel-image");

    a.appendChild(img);
    li.appendChild(a);
    slideTrack.appendChild(li);
  });

  let currentIndex = 0;
  const intervalTime = 3000;
  const allSlides = slideTrack.querySelectorAll("li");

  function showSlide(index) {
    allSlides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % allSlides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, intervalTime);
});