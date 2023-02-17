import "../styles/style.css";
import "./api.js";
import { DOMselectors } from "./dom";

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
      .filter((article) => article.rarity.name.includes(cardName))
      .forEach((article) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="name">${article.name}</h2> <img class="img" src="${article.urlToImage}" alt="Image of ${article.title}" > <h3 class="desc">${article.description}</h3> <a href="${article.url}"><button class="link" confirm("Do you want to leave this page?")>Article Link</button></a></sub> </div>`
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
          `<div id="parent"><sub class="child" > <h2 class="name">${article.name}</h2> <img class="img" src="${article.urlToImage}" alt="Image of ${article.name} in game" > <h3 class="author">${article.author}</h3><h3 class="desc">${article.description}</h3> <a href="${article.url}"><button class="link " confirm("Do you want to leave this page?")>Article Link</button></a></sub> </div>`
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
        `<div id="parent"><sub class="child" > <h2 class="name">${article.name}</h2> <img class="img" src="${article.urlToImage}" alt="Image of ${article.name}"> <h3 class="author">${article.author}</h3> <h3 class="desc">${article.description}</h3> <a href="${article.link}" = "_blank" rel="noopener noreferrer"><button class="link" onClick = "confirmFunction()">Article Link</button></a></sub> </div>`
      );
    });
  },

  all: DOMselectors.allBtn.addEventListener("click", function () {
    filters.removeCards();
    functions.display();
  }),
};

functions.display(URL);
