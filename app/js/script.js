//navmenu
const navigation = (() => {
  const menuOpen = document.getElementById("open");
  const menuClose = document.getElementById("close");
  const headerNavbar = document.querySelector(".header__navbar");
  menuOpen.addEventListener("click", () => {
    headerNavbar.classList.add("open");
  });

  menuClose.addEventListener("click", () => {
    headerNavbar.classList.remove("open");
  });
})();

// ScrollDown effect
const scrollDownEffect = (() => {
  const scrollDown = document.getElementById("scrollDown");
  scrollDown.addEventListener("click", (e) => {
    e.preventDefault();
    const href = scrollDown.getAttribute("href");
    scroll({
      top: document.querySelector(href).offsetTop,
      behavior: "smooth",
    });
  });
})();

// slider navigation
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

// gsap animation
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
