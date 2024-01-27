const handleHamburgerClicks = () => {
  const hamburger = document.querySelector(".menu__hamburger");
  const menu = document.querySelector(".menu__nav");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("menu__hamburger--active");
    menu.classList.toggle("hidden");
  });
};

handleHamburgerClicks();
