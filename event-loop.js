const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
setTimeout(() => console.log("TimeOut 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./starter/test-file.txt", () => {
    console.log("I/O finished");
    console.log("------------------");
    setTimeout(() => console.log("TimeOut 2 finished"), 0);
    setTimeout(() => console.log("TimeOut 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"));
    process.nextTick(() => console.log("Process.next finished"));

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted");
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted");
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted");
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted");
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted");
    });
});

console.log("I am from the top level code");
