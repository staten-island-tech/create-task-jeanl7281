import "./style.css";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4fw22uR3o7ORbmHGsqRgnyOqQMOFA6yL";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.list;
      console.log(data);
    }
  } catch (Error) {
    console.log(Error);
    console.log(":/");
    "api-response".textContent = "Sorry we couldn't find the specified article";
  }
}

export { URL };
