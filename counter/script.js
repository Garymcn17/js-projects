const incrementEl = document.querySelector(".increment");
const decrementEl = document.querySelector(".decrement");
const resetEl = document.querySelector(".reset");
let counterEl = document.querySelector(".counter-value");

incrementEl.addEventListener("click", () => {
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
