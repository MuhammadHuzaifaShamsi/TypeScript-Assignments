// Assignment 3: Company Product Catalog
type Product = {
    name: string;
    model: number;
    cost: number;
    quantity: number;
}

let inventory = [];


let firstProduct: Product = {
    name: "BMW m3",
    model: 2020,
    cost: 20000,
    quantity: 4
}

let secondProduct: Product = {
    name: "BMW m4",
    model: 2022,
    cost: 20000,
    quantity: 3
}

let thirdProduct: Product = {
    name: "BMW i4",
    model: 2023,
    cost: 30000,
    quantity: 6
}

inventory.push(firstProduct, secondProduct, thirdProduct);

// Accessing the Quantity of BMW m4
const quantity: number = inventory[1].quantity;
console.log(quantity);



let finalProduct: Product = {
    name: "BMW i7",
    model: 2024,
    cost: 40000,
    quantity: 5
}
inventory.push(finalProduct);

const quantityOfFinalProduct: number = inventory[3].quantity;
console.log(quantityOfFinalProduct); 