import "../styles/style.css";
import { DOMSelectors } from "./dom";
import {articles} from "./file";
console.log(create);

  async function data(articles){
    try{
      const response = await fetch(articles);
      if (response.status < 200 || response.status > 299){
        throw new Error(response);
      } else {
        const data = await response.json();
        console.log(data);
      }
      } catch (error){
        console.log(error);
        console.log("Sorry, but we couldn't find the specified article.");
      }
    }

    function create() {
      articles.forEach((article) => {
        DOMSelectors.display.innerHTML = " ";
        DOMSelectors.maindiv.insertAdjacentHTML
          ("beforeend",
            `<div id="articlecard">
            <h2> ${article.title}<h2>
            <p id="date"> Year Published: ${article.published_date}<p>
            <p id="author"> Author: ${article.byline}<p>
            <p id="desc"> ${article.abstract}<p>
            <button id="link" class="link">Article Link<button>
            </div>`
        );
      });
    };

    document.querySelector(".btn").addEventListener("click", function () {
      if (document.body.classList.contains("light")
      ) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      };
    });

const world = document.getElementById("world");
world.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  articles.filter((world) => world.section === "world")
    .forEach(world => {
      DOMSelectors.main.insertAdjacentHTML
        ("beforeend",
          `<div id="articlecard">
          <h2> ${world.title}<h2>
          <p id="date"> Year Published: ${world.published_date}<p>
          <p id="author"> Author: ${world.byline}<p>
          <p id="desc"> ${world.abstract}<p>
          <h3><a href="${world.url}">Link</a></h3>
          </div>`
        );
    });
});

const business = document.getElementById("business");
business.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  articles.filter((business) => business.section === "business")
    .forEach(business => {
      DOMSelectors.main.insertAdjacentHTML
        ("beforeend",
          `<div id="articlecard">
          <h2> ${business.title}<h2>
          <p id="date"> Year Published: ${business.published_date}<p>
          <p id="author"> Author: ${business.byline}<p>
          <p id="desc"> ${business.abstract}<p>
          <h3><a href="${business.url}">Link</a></h3>
          </div>`
        );
    });
});

const us = document.getElementById("us");
us.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  articles.filter((us) => us.section === "business")
    .forEach(us => {
      DOMSelectors.main.insertAdjacentHTML
        ("beforeend",
          `<div id="articlecard">
          <h2> ${us.title}<h2>
          <p id="date"> Year Published: ${us.published_date}<p>
          <p id="author"> Author: ${us.byline}<p>
          <p id="desc"> ${us.abstract}<p>
          <h3><a href="${us.url}">Link</a></h3>
          </div>`
        );
    });
});
