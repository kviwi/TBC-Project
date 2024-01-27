document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".navigation__container");
  const heroSection = document.querySelector(".hero");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= heroSection.offsetTop) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
