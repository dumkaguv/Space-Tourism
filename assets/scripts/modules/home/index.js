"use strict";

const burgerButton = document.querySelector(".header__burger-menu");
const modal = document.querySelector(".modal-burger");
const showModalButton = document.querySelector(".header__burger-menu");

function initBurgerModal() {
  burgerButton.addEventListener("click", showMenu);
  modal.addEventListener("click", closeMenu);
}

function showMenu() {
  modal.style.display = "block";
  showModalButton.style.display = "none";
}

function closeMenu(event) {
  if (
    event?.target?.closest(".modal-burger__close") ||
    event?.target === modal
  ) {
    modal.style.display = "none";
    showModalButton.style.display = "block";
  }
}

initBurgerModal();
