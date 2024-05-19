"use strict";
// Basic Arrays: Product Inventory
let products = [
    {
        name: "Laptops",
        price: 1000,
        inventory: {
            stock: 50,
            colorOptions: ["black", "silver"]
        }
    },
    {
        name: "Smartphones",
        price: 700,
        inventory: {
            stock: 100,
            colorOptions: ["white", "blue"]
        }
    },
    {
        name: "Headphones",
        price: 150,
        inventory: {
            stock: 200,
            colorOptions: ["red", "black"]
        }
    }
];
let changeColor = (product, newColor) => {
    if (!product.inventory.colorOptions.includes(newColor)) {
        console.log(`Color ${newColor} is not available for ${product.name}.`);
        return;
    }
    const originalPrice = product.price;
    switch (newColor.toLowerCase()) {
        case "red":
            product.price = originalPrice * 1.10;
            break;
        case "blue":
            product.price = originalPrice * 0.95;
            break;
        default:
            product.price = originalPrice;
            break;
    }
    console.log(`${product.name} color changed to ${newColor}. New price: ${product.price.toFixed(2)}`);
};
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
    console.log("---------------------------");
}
changeColor(products[0], "red");
changeColor(products[1], "blue");
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
    console.log("---------------------------");
}
let students = [
    {
        name: "Huzaifa",
        grades: [85, 92, 78, 88]
    },
    {
        name: "Muzamil",
        grades: [90, 76, 88, 95]
    },
    {
        name: "Raafe",
        grades: [79, 85, 91, 82]
    }
];
let calculateAvgGrade = (grades) => {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
};
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let averageGrade = calculateAvgGrade(student.grades);
    console.log(`Name: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
}
let employees = [
    {
        name: "Ahmed",
        hoursWorked: 15,
        hourlyRate: 20,
        salary: 1000
    },
    {
        name: "Abdullah",
        hoursWorked: 35,
        hourlyRate: 45,
        salary: 1700
    },
    {
        name: "Arshad",
        hoursWorked: 9,
        hourlyRate: 35,
        salary: 800
    }
];
let calculateSalary = (employee) => {
    let salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        salary *= 1.10;
    }
    employee.salary = salary;
};
for (let i = 0; i < employees.length; i++) {
    calculateSalary(employees[i]);
    console.log(`Name: ${employees[i].name}, Salary: $${employees[i].salary.toFixed(2)}`);
}
