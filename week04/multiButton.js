const foodButton = document.querySelectorAll(".food");
const submitButton = document.querySelector(".submit");

submitButton.disabled = true;

foodButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selected");
    updateSubmit();
  });
});

function updateSubmit() {
  const selected = document.querySelectorAll(".food.selected");
  const isActive = selected.length > 0;

  submitButton.disabled = !isActive;

  if (isActive) {
    submitButton.classList.add("selected");
  } else {
    submitButton.classList.remove("selected");
  }
}

submitButton.addEventListener("click", () => {
  const selected = document.querySelectorAll(".food.selected");
  const selectedFoods = Array.from(selected).map((btn) => btn.textContent);
  console.log("선택한 음식: ", selectedFoods);
});
