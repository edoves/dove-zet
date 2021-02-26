const testimonialSlider = (() => {
  const testimonialSlide = document.querySelector(".testimonial__slide");
  const buttonNavContainer = document.querySelector(".testimonial__slider-nav");
  const btns = Array.from(buttonNavContainer.children);

  btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      testimonialSlide.style.transform = `translateX(${idx * -25}%)`;
      removeActiveClass(btn);
    });
  });

  const removeActiveClass = (el) => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    el.classList.add("active");
  };
})();

const gsapAnimation = (() => {
  gsap.from(".services__detail", {
    scrollTrigger: ".services__detail",
    duration: 1,
    opacity: 0,
    delay: 0.5,
    y: 150,
    stagger: 0.25,
  });

  gsap.from(".team__profile", {
    scrollTrigger: ".team__profile",
    duration: 1,
    opacity: 0,
    delay: 0.5,
    y: 150,
    stagger: 0.25,
  });
})();
