"use strict";

const tabs = document.querySelectorAll(".hero__menu-item-tab");

const activeLinkClass = "active-link";
const activeTabClass = "active-tab";

const contentDiv = document.querySelector(".hero__content");
const tabTitleDiv = document.querySelector(".hero__inner-title");
const tabDescDiv = document.querySelector(".hero__inner-description");
const tabDistanceValDiv = document.querySelector(
  ".hero__inner-distance-value"
);
const tabTimeValDiv = document.querySelector(".hero__inner-time-value");
const tabImage = document.querySelector(".hero__content-image");

switchTab();

function switchTab() {
  fetchData()
    .then((data) => {
      const dataDestinations = data.destinations;

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          if (tab.classList.contains(activeLinkClass)) {
            return;
          }

          const tabData = tab.dataset.tab;
          const destination = dataDestinations.find(
            (data) => data.name === tabData
          );

          if (destination) {
            tabs.forEach((tab) =>
              tab.classList.remove(activeLinkClass, activeTabClass)
            );
            tab.classList.add(activeLinkClass, activeTabClass);

            triggerAnimation(contentDiv);
            updateTabContent(destination);
          }
        });
      });
    })
    .catch((error) => {
      console.error("Ошибка загрузки данных:", error);
    });
}

function updateTabContent(destination) {
  tabTitleDiv.textContent = destination.name;
  tabDescDiv.textContent = destination.description;
  tabDistanceValDiv.textContent = destination.distance;
  tabTimeValDiv.textContent = destination.travel;

  tabImage.src = destination.images.webp;
  tabImage.alt = destination.name;
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
