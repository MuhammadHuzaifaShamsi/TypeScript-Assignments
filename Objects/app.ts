// Part 1: Employee Data
type Employee = {
    name: string;
    department: string;
    role: "Manager" | "Engineer" | "Intern";
    contact?: {
        phone?: number;
        email?: string;
    }
    skills?: string[];
}

// Part 2: Car Details
type Car = {
    engine: {
        horsePower: number;
    }
    getHorsePower: () => number;
}

// Part 3: colorful T-Shirts
type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number;
        colorOptions?: string[];
        changeColor: (obj: Product, newColor: string) => void;
    }
};

const tShirt: Product = {
    name: "T-shirt",
    price: 200,
    color: "white",
    inventory: {
        stock: 100,
        colorOptions: ["white", "red", "blue"],
        changeColor: function (obj: Product, newColor: string) {
            obj.color = newColor;

            switch (newColor.toLowerCase()) {
                case "red":
                    obj.price *= 1.1;
                    break;
                case "blue":
                    obj.price *= 0.95;
                    break;
                default:
                    break;
            }
        }
    }
};

tShirt.inventory.changeColor(tShirt, "red");

console.log(tShirt.color);
console.log(tShirt.price.toFixed(2));




