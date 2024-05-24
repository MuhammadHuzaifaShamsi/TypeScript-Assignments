"use strict";
// Assignment 2:Manipulating an Array: Rearranging Words
let scrabbledArray = ["student", 324927, "of", "I", true, "GIAIC", "am a"];
let theArray = [];
for (let i = 0; i < scrabbledArray.length; i++) {
    if (scrabbledArray[i] == ("I")) {
        theArray.unshift(scrabbledArray[i]);
    }
    else if (scrabbledArray[i] == "am a") {
        theArray.splice(1, 0, scrabbledArray[i]);
    }
    else if (scrabbledArray[i] == "student") {
        theArray.splice(2, 0, scrabbledArray[i]);
    }
    else if (scrabbledArray[i] == "of") {
        theArray.splice(3, 0, scrabbledArray[i]);
    }
    else if (scrabbledArray[i] == "GIAIC") {
        theArray.push(scrabbledArray[i]);
    }
}
console.log(theArray.join(" ") + ".");
