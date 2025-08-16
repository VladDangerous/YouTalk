let userInput = prompt("Введите любое число:");
let number = Number(userInput);

let numbersArray = [];

for (let i = 0; i <= number; i++) {
    numbersArray.push(i);
}

console.log(numbersArray);