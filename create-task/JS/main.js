import "../styles/style.css";
import "./api.js";
import { DOMselectors } from "./dom";
import { URL } from "./api.js";

const filters = {
  removeCards: function () {
    const cards = document.querySelectorAll(".child");
    const cardsArray = Array.from(cards);
    cardsArray.forEach((cards) => {
      cards.remove();
    });
  },

  filterRarities: async function (cardName) {
    const response = await fetch(URL);
    const data = await response.json();
    data.list
      .filter((article) => article.title.includes(cardName))
      .forEach((article) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="title">${article.title}</h2><h3 class="desc">${article.abstract}</h3> <a href="${article.short_url}"><button class="link" confirm("Do you want to leave this page?")>Article Link</button></a></sub> </div>`
        );
      });
  },
  filterExact: async function (cardName) {
    const response = await fetch(URL);
    const articles = await response.json();
    articles
      .filter((article) => article.name === cardName)
      .forEach((article) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="title">${article.title}</h2><h3 class="desc">${article.abstract}</h3> <a href="${article.short_url}"><button class="link" confirm("Do you want to leave this page?")>Article Link</button></a></sub> </div>`
        );
      });
  },
};

const functions = {
  display: async function () {
    const response = await fetch(URL);
    const articles = await response.json();
    articles.list.forEach((article) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div id="parent"><sub class="child" > <h2 class="title">${article.title}</h2><h3 class="desc">${article.abstract}</h3> <a href="${article.short_url}"><button class="link" confirm("Do you want to leave this page?")>Article Link</button></a></sub> </div>`
      );
    });
  },

  all: DOMselectors.allBtn.addEventListener("click", function () {
    filters.removeCards();
    functions.display();
  }),
};

functions.display(URL);
