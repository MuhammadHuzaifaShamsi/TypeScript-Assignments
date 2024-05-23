import inquirer from "inquirer";

// ------ Task 1: Miles-to-Kilo Converter

let miles: number = 5;
let kilometers: number = miles * 1.60934;
console.log(`The distance ${kilometers} km is equal to ${miles} miles.`);

// ------ Task 2: Number Game

while (true) {
    let game: {
        number: number
    } = await inquirer.prompt({
        name: "number",
        type: "input",
        message: "Enter a number between 1 to 20:"
    });

    let preNum: number = 12; 
    let userNum = game.number;

    if (userNum == preNum) {
        console.log("Your guess is EXACT!");
        break;
    }
    else if (userNum > preNum) {
        console.log("Your guess is GREATER than the predefined number!");
    }
    else {
        console.log("Your guess is LESSER than the predefined number!");
    }
}

// ------ Task 3: Friend checker game

let checkFriend = await inquirer.prompt({
    name: "friend",
    type: "input",
    message: "Enter your friend's name:"
});

let friend: string = checkFriend.friend;

switch (friend) {
    case "Muzamil":
        console.log("Muzamil is your friend!");
        break;
    case "Raafe":
        console.log("Raafe is your friend!");
        break;
    default: 
        console.log("He is an imposter :)"); 
}

// ------ Task  4: Functions
let firstName: string = "Muhammad";
let lastName: string = "Huzaifa";

let callVar = (str1: string, str2: string) => console.log(str1, str2);

callVar(firstName, lastName);
callVar("Raafe", "Nadeem");

// ------ Task 5: Calculator project using funcitons
let numOne: number = 18;
let numTwo: number = 20;

let operator: string = "-";

let result = (num1: number, num2: number, action: string) => {
    switch (action) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        default: 
            return null;
    }
}

console.log(result(numOne, numTwo, operator))

// ------ Task 6: Anonymous functions

let sayHello = (str: string) => {
    console.log("Hello", str);
}
sayHello("Muzamil");

function sayHelloAgain (str: string) {
    console.log("Hello", str);
} 
sayHelloAgain("Raafe")