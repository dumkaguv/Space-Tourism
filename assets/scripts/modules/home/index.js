"use strict";

const burgerButton = document.querySelector(".header__burger-menu");
const modal = document.querySelector(".modal-burger");
const showModalButton = document.querySelector(".header__burger-menu");
const modalContent = document.querySelector(".modal-burger__content");
const heroSection = document.querySelector(".hero__content");

initBurgerModal();
triggerAnimation(heroSection);

function initBurgerModal() {
  burgerButton.addEventListener("click", showMenu);
  modal.addEventListener("click", closeMenu);
}

function showMenu() {
  modal.style.display = "block";
  showModalButton.style.display = "none";

  requestAnimationFrame(() => {
    modalContent.style.width = "60%";
  });
}

function closeMenu(event) {
  if (
    event?.target?.closest(".modal-burger__close") ||
    event?.target === modal
  ) {
    modalContent.style.width = "0";

    modalContent.addEventListener(
      "transitionend",
      () => {
        modal.style.display = "none";
        showModalButton.style.display = "block";
      },
      { once: true }
    );
  }
}

function triggerAnimation(element) {
  element.classList.remove("active");

  requestAnimationFrame(() => {
    element.classList.add("active");
  });
}

