"use strict";

const content = document.querySelector(".hero__content");
const paginationList = document.querySelector(".hero__pagination");
const paginationButtons = document.querySelectorAll(
  ".hero__pagination-button"
);

const nameDiv = document.querySelector(".hero__inner-name");
const descriptionDiv = document.querySelector(".hero__inner-description");
const imageDiv = document.querySelector(".hero__content-image");

const activeTab = "is-current";

switchTab();

function switchTab() {
  fetchData().then((data) => {
    const dataTechnology = data.technology;

    paginationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.classList.contains(activeTab)) {
          return;
        }

        const tabIndex = parseInt(button.dataset.index);
        const current = dataTechnology[tabIndex];

        if (current) {
          paginationButtons.forEach((btn) => {
            btn.classList.remove(activeTab);
          });
          button.classList.add(activeTab);

          updateTabContent(current);
          triggerAnimation(content);
        }
      });
    });
  });
}

function updateTabContent(current) {
  nameDiv.textContent = current.name;
  descriptionDiv.textContent = current.description;
  imageDiv.src = current.images.portrait;
}

function fetchData() {
  return fetch("./assets/data/data.json").then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function triggerAnimation(element) {
  element.classList.remove("active");
  requestAnimationFrame(() => {
    element.classList.add("active");
  });
}
