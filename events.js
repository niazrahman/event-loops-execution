const EventEmmiter = require("events");

class Sales extends EventEmmiter {
    constructor() {
        super();
    }
}
const myEmmiter = new Sales();

myEmmiter.on("order", () => {
    console.log("Knock! Knock! New order is placed!");
});

myEmmiter.on("order", () => {
    console.log(`This order is placed by Niaz`);
});

myEmmiter.on("order", (prod) => {
    console.log(`He ordered ${prod} products`);
});

myEmmiter.emit("order", 10);
