const card = document.querySelector(".card");
if (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

const form = document.querySelector(".formContainer");
if (form) {
  form.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

window.sendCodeMirror = function sendCodeMirror() {
  const input = document.getElementById("puzzle_input");
  if (!input) {
    return;
  }
  const code = input.value;
  if (code === "5555") {
    window.location.href = "./codes.html";
  }
};

window.sendCodeMedia = function sendCodeMedia() {
  const input = document.getElementById("media_input");
  if (!input) {
    return;
  }
  const code = input.value;
  if (code === "5555") {
    window.location.href = "./codeis5555.html";
  }
};

window.sendCodes = function sendCodes() {
  const input1 = document.getElementById("codes_input_1");
  const input2 = document.getElementById("codes_input_2");
  const input3 = document.getElementById("codes_input_3");
  if (!input1 || !input2 || !input3) {
    return;
  }
  if (input1.value.toUpperCase() !== "WHATALIFE") {
    return;
  }
  if (input2.value.toUpperCase() !== "BUBZ") {
    return;
  }
  if (input3.value.toUpperCase() !== "MARTEAU") {
    return;
  }
  window.location.href = "./end.html";
};
