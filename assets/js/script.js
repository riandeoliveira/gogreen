"use strict";

const navList = document.querySelector(".nav-list");
const navMenuIcon = document.querySelector("#navMenuIcon");

let openedMenu = false;

const openCloseMenu = () => {
  if (openedMenu === false) {
    navList.style.display = "flex";

    openedMenu = true;
  } else {
    navList.style.display = "none";

    openedMenu = false;
  }
};

const articleElements = document.querySelectorAll("article");

const scrollPositions = [500, 1500, 2500, 3500, 4500, 5500, 6500];
const articles = [];

for (let tag of articleElements) {
  articles.push(tag);
}

const positionArticles = () => {
  articles.map((item, i) => {
    if (i % 2 === 0) {
      if (window.scrollY >= scrollPositions[i])
        articles[i].style.animation = "fade-in 1.5s forwards, go-right 1.5s";
    } else {
      if (window.scrollY >= scrollPositions[i])
        articles[i].style.animation = "fade-in 1.5s forwards, go-left 1.5s";
    }
  });
};

const checkScroll = () => {
  window.scrollY > 500
    ? (scrollButton.style.display = "block")
    : (scrollButton.style.display = "none");
};

const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  checkScroll();
  positionArticles();
});
