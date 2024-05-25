"use strict";
const tShirt = {
    name: "T-shirt",
    price: 200,
    color: "white",
    inventory: {
        stock: 100,
        colorOptions: ["white", "red", "blue"],
        changeColor: function (obj, newColor) {
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
