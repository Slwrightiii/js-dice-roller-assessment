const rollButton = document.querySelector("#roll-button");
const showAllRollsButton = document.querySelector("#show-all-rolls-button");
const numDiceElement = document.querySelector("#number-of-dice");
const SumDiceRolls = document.querySelector("#total-area");
const AllRollsElement = document.querySelector("#All-Rolls");
const TotalResultsElement = document.querySelector("#total-results");
const resetButton = document.querySelector("#reset-button");
const dieRolls = [];

let randNum = Math.floor(Math.random() * 6) + 1;
let sum = 0;

rollButton.addEventListener("click", function () {
  let numberRolled = numDiceElement.value;

  for (let position = 0; position < numberRolled; position += 1) {
    randNum = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(randNum);
  }

  console.log(dieRolls);

  let sum = 0;

  for (let position = 0; position < dieRolls.length; position++) {
    sum += dieRolls[position];
  }
  console.log(sum);

  document.getElementById("total-results").innerHTML = sum;

  //  ciation: https://stackoverflow.com/questions/46438847/dice-roll-counter-in-javascript
});

showAllRollsButton.addEventListener("click", function () {
  dieRolls.forEach(function (roll) {
    let li = document.createElement("li");
    AllRollsElement.appendChild(li);
    li.innerHTML = roll;
  });

  // citation: https://getbutterfly.com/generate-html-list-from-javascript-array/

  resetButton.addEventListener("click", function () {
    console.log("Reset");
    dieRolls.length = 0;
    dieRolls.innerHTML = 0;
    TotalResultsElement.innerHTML = 0;
    AllRollsElement.innerHTML = 0;
  });
});
