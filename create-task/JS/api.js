import "./style.css";

const URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e9bab4593cb4aa5beeca8173fc5b948";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if ((response.status = "ok")) {
      const articles = await response.json();
      document.getElementById("api-response").textContent = articles.list;
      console.log(articles);
    } else {
      throw Error(response.status);
    }
  } catch (Error) {
    console.log(Error);
    console.log(":/");
    document.getElementById("api-response").textContent =
      "Sorry we couldn't find the specified article";
  }
}
