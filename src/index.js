const card = document.querySelector(".card");
card.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
});

const form = document.querySelector(".formContainer");
form.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
});

window.sendCode = function sendCode() {
  const input = document.getElementById("puzzle_input");
  const code = input.value;
  if (code === "5555") {
    console.log("BRAVO");
  }
};
