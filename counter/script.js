//const incrementEl = document.querySelector(".increment");
const incrementEl = document.getElementById("increment");
const incrementEl1 = document.getElementsByClassName("increment");
const decrementEl = document.querySelector(".decrement");
const resetEl = document.querySelector(".reset");
let counterEl = document.querySelector(".counter-value");

incrementEl1[0].addEventListener("click", () => {
  const value = +counterEl.textContent;

  counterEl.textContent = value + 1;
});

decrementEl.addEventListener("click", () => {
  const value = +counterEl.textContent;

  counterEl.textContent = value - 1;
});

resetEl.addEventListener("click", () => {
  counterEl.textContent = 0;
});
