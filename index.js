let number = 0;

const numberEl = document.querySelector(".number");
const btnDecrease = document.querySelector("#decrease");
const btnReset = document.querySelector("#reset");
const btnIncrease = document.querySelector("#increase");



btnDecrease.addEventListener("click", () => {
  number -= 1;
  numberEl.textContent = number;
});

btnReset.addEventListener("click", () => {
    numberEl.textContent = 0;
    return number = 0;
});

btnIncrease.addEventListener("click", () => {
  number += 1;
  numberEl.textContent = number;
});
