"use strict";
// Assignment 1: Building Yuor Friend List
let people = {
    friends: []
};
let firstFriend = {
    firstName: "Muzamil",
    lastName: "Mughal",
    id: 123
};
let secondFriend = {
    firstName: "Raafe",
    lastName: "Nadeem"
};
let thirdFriend = {
    firstName: "Hassan",
    lastName: "Sheikh",
    id: 234
};
people.friends.push(firstFriend, secondFriend, thirdFriend);
console.log(people);
