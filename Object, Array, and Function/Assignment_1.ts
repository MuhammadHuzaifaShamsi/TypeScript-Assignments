// Assignment 1: Building Yuor Friend List

type Friends = {
    firstName: string;
    lastName: string;
    id?: number;
} 
type People = {
    friends: Friends[]
}

let people: People = {
    friends: []
}


let firstFriend: Friends = {
    firstName: "Muzamil",
    lastName: "Mughal",
    id: 123
}

let secondFriend: Friends = {
    firstName: "Raafe",
    lastName: "Nadeem"
}

let thirdFriend: Friends = {
    firstName: "Hassan",
    lastName: "Sheikh",
    id: 234
}

people.friends.push(firstFriend, secondFriend, thirdFriend);
console.log(people);