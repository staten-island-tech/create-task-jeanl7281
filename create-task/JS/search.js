whateverElement.addEventListener("event type", () => {});
const searchInput = document.querySelector(".input");
searchInput.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
  }
});
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {});
