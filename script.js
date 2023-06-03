const displayMsg = document.querySelector(".display-msg");
const keys = document.querySelectorAll(".key");
const operators = [keys[3], keys[7], keys[11], keys[15]];
const equalOp = keys[13];
const resetBtn = keys[14];
const numbers = [
  keys[0],
  keys[1],
  keys[2],
  keys[4],
  keys[5],
  keys[6],
  keys[8],
  keys[9],
  keys[10],
];

let factor1;
let factor2;
let activeOperator;

//DISPLAY

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", function () {
    if (displayMsg.innerHTML == 0 && i !== 13 && i !== 14) {
      displayMsg.innerHTML = keys[i].innerHTML;
    } else if (i !== 13 && i !== 14) {
      displayMsg.innerHTML = displayMsg.innerHTML + keys[i].innerHTML;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    factor1 = Number(displayMsg.innerHTML.slice(0, -1));
    activeOperator = operators[i].innerHTML;
  });
}

equalOp.addEventListener("click", function () {
  const factor1CharNum = String(factor1).split("").length;
  factor2 = Number(displayMsg.innerHTML.slice(factor1CharNum + 1));

  if (activeOperator == "+") {
    displayMsg.innerHTML = factor1 + factor2;
  } else if (activeOperator == "-") {
    displayMsg.innerHTML = factor1 - factor2;
  } else if (activeOperator == "*") {
    displayMsg.innerHTML = factor1 * factor2;
  } else if (activeOperator == "/") {
    displayMsg.innerHTML = factor1 / factor2;
  }
});

resetBtn.addEventListener("click", function () {
  displayMsg.innerHTML = "0";
  factor1 = undefined;
  factor2 = undefined;
});
