const listEl = document.querySelector(".items");
const btnEl = document.querySelector(".add-btn");
const newItem = document.querySelector(".input-item");
const delEl = document.querySelector(".list-btn");

btnEl.addEventListener("click", (event) => {
  event.preventDefault();

  const item = newItem.value;
  console.log(item);
  newItem.value = "";

  if (item) {
    listEl.insertAdjacentHTML(
      "beforeend",
      `<li>${item} <button class="list-btn">X</button></li>`
    );
  } else {
    throw new Error("Invalid Entry");

    console.log("Invalid Entry");
  }
});

listEl.addEventListener("click", (event) => {
  const clicked = event.target.parentNode;
  clicked.remove();
});
