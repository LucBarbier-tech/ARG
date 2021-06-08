let selectedSymbols = [];

const FIRSTSOLUTION = [13, 14, 16, 17, 8, 6];
const SECONDSOLUTION = [13, 5, 11, 15, 6, 9];
const THIRDSOLUTION = [10, 21, 12, 14, 20, 22];

const toggleSymbolArray = (symbolNumber) => {
  if (
    selectedSymbols.some((selectedSymbol) => selectedSymbol === symbolNumber)
  ) {
    selectedSymbols = selectedSymbols.filter(
      (selectedSymbol) => symbolNumber !== selectedSymbol
    );
  } else {
    selectedSymbols.push(symbolNumber);
  }
};

const checkSolution = (solutionArray, solutionNumber) => {
  const isValid = solutionArray.length === 6 && selectedSymbols.length === 6;
  const number = document.getElementById(`${solutionNumber}Number`);
  if (isValid) {
    if (!number.classList.contains("finished")) {
      number.classList.add("finished");
    }
  }
  return number.classList.contains("finished");
};

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
  window.location.href = "./symboles.html";
};

window.selectSymbol = function selectSymbol(symbolNumber) {
  const symbol = document.getElementById(symbolNumber);
  symbol.classList.toggle("active");

  toggleSymbolArray(symbolNumber);

  const firstIntersection = FIRSTSOLUTION.filter((element) =>
    selectedSymbols.some((selectedSymbol) => selectedSymbol === element)
  );

  const secondIntersection = SECONDSOLUTION.filter((element) =>
    selectedSymbols.some((selectedSymbol) => selectedSymbol === element)
  );

  const thirdIntersection = THIRDSOLUTION.filter((element) =>
    selectedSymbols.some((selectedSymbol) => selectedSymbol === element)
  );

  const firstResult = checkSolution(firstIntersection, "first");
  const secondResult = checkSolution(secondIntersection, "second");
  const thirdResult = checkSolution(thirdIntersection, "third");

  if (firstResult && secondResult && thirdResult) {
    window.location.href = "./end.html";
  }
};
