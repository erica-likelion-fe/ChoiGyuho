const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

increaseBtn.addEventListener("mouseover", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
