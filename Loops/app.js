"use strict";
let myWork = [];
for (let i = 1; i <= 10; i++) {
    let status = true;
    (i % 2) == 0 ? status = false : status = true;
    let lesson = {
        name: `lesson ${i}`,
        status: status
    };
    myWork.push(lesson);
}
console.log(myWork);
// 2. Guessing Game (Using while loop)
const maxVal = 25;
const randomVal = Math.floor(Math.random() * maxVal);
console.log(`Randomly generated number: ${randomVal}\n`);
let userGuess = false;
let predictedGuesses = [2, 7, 13, 6, 19, 20, 22, 21, 12, 11];
let i = 0;
while (i < predictedGuesses.length) {
    if (predictedGuesses[i] === randomVal) {
        userGuess = true;
        console.log("Your Guess is correct!!");
    }
    else if (predictedGuesses[i] > randomVal) {
        console.log("Too Low!! Try again");
    }
    else {
        console.log("Too high!! Try again");
    }
    i++;
}
if (!userGuess) {
    console.log(`\nNo Guess was right!! The correct no. was, ${randomVal}`);
}
// 3. Counter Incrementer (Using do while loop)
let counter = 0;
let step = 1;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
console.log(`Final Counter Val: ${counter}`);
// 4.Exploring Objects with for...in Loop
let myObject = {
    item1: "Shirts",
    item2: "Jeans",
    item3: "Jackets"
};
for (let i in myObject) {
    console.log(`${i}: ${myObject[i]}`);
}
// 5.Exploring Arrays with Loops(Using loop)
let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
    console.log(`${i}: ${myArray[i]}`);
}
for (let i of myArray) {
    console.log(i);
}
