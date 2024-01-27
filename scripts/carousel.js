const prevButton = document.querySelector(".carousel__prev-btn");
const nextButton = document.querySelector(".carousel__next-btn");
const carouselItems = [...document.querySelectorAll(".carousel__item")];
const caroselBullets = [...document.querySelectorAll(".carousel__bullet")];

let currentItemindex = 0;
caroselBullets[0].classList.add("active");

const hideUnnecessaryItems = () => {
  carouselItems.forEach((item, i) => {
    if (i !== currentItemindex) {
      item.classList.add("hidden");
      caroselBullets[i].classList.remove("active");
    } else {
      item.classList.remove("hidden");
      caroselBullets[i].classList.add("active");
    }
  });
};

nextButton.addEventListener("click", (e) => {
  currentItemindex = (currentItemindex + 1) % carouselItems.length;
  hideUnnecessaryItems();
});

prevButton.addEventListener("click", (e) => {
  currentItemindex =
    (currentItemindex - 1 + carouselItems.length) % carouselItems.length;
  hideUnnecessaryItems();
});

caroselBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentItemindex = index;
    hideUnnecessaryItems();
  });
});

// setInterval(() => {
//   currentItemindex = (currentItemindex + 1) % carouselItems.length;
//   hideUnnecessaryItems();
// }, 6000);

hideUnnecessaryItems();
