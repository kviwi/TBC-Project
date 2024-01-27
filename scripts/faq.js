const toggleDrills = () => {
  const drills = [...document.querySelectorAll(".faq__item")];

  drills.forEach((accordion) => {
    console.log(accordion);
    const intro = accordion.querySelector(".faq__item-question");
    const content = accordion.querySelector(".faq__answer");

    intro.onclick = () => {
      if (content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        drills.forEach((accordion) => closeAccordion(accordion));
        openAccordion(accordion);
      }
    };
  });
};

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".faq__answer");
  const icon = accordion.querySelector(".arrow-icon");
  icon.classList.add("rotate");
  content.classList.add("faq__answer--active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".faq__answer");
  const icon = accordion.querySelector(".arrow-icon");
  icon.classList.remove("rotate");
  content.classList.remove("faq__answer--active");
  content.style.maxHeight = null;
};

toggleDrills();
