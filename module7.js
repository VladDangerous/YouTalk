
//  7.7.1
const printInfo = function() {
    console.log("Name: " + this.name + ", Age: " + this.age);
};

const person = {
    name: "John",
    age: 24
};

printInfo.call(person);

// 7.7.2
// const calculate = (a, b, operator) => {
//     switch(operator){
//         case "+":
//             return a +b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default: 
//         return "Неизвестная операция"
//     }
// }
// const result = calculate.apply(null, [2,3,"+"])
// console.log(result);


//7.7.3
// const users = [
//     { name: "Аня", age: 25 },
//     { name: "Петя", age: 17 },
//     { name: "Маша", age: 30 },
//     { name: "Вася", age: 16 },
//     { name: "Катя", age: 22 }
// ];

// const adults = users
//         .filter(user => user.age >= 18)
//         .map(user => user.name);
// console.log(adults);

//7.7.4
// function setFullName(fullName) {
//     this.fullName = fullName;
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const setPersonFullName = setFullName.bind(person);
// setPersonFullName("John Smith");
// console.log(person);

//7.7.5
// const getUniqueSorted = (numbers) => {
//     const unique = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
//     return unique.sort((a, b) => a - b);
// };
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// const result = getUniqueSorted(numbers);
// console.log(result);