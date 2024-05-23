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
        colorOptions: string[];
        changeColor: (newColor: string) => {
            if (this.colorOptions.includes(newColor)) {
                return false;
            }
            else{
                
            }
        } 
    }
}

let inventory: Product = {
    name: "Denim",
    price: 1000,
    color: "black",
    inventory: {
        stock: 20,
        colorOptions: ["red", "blue", "black"]
    }
};


