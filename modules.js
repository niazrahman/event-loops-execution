// console.log(arguments);
// console.log(require("module").wrapper);

const Calculator = require("./test-module-1");

const cal1 = new Calculator();

console.log(cal1.multiply(10, 12));

const { add, multiply, subtract, divide } = require("./test-module-2");

console.log(add(3, 7));
