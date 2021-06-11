const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
    // solution-1 : WARNING: This may create problem on large file
    // fs.readFile("./starter/test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });
    // solution-2 : Using Streams WARNING: It creates back pressue
    // const stream = fs.createReadStream("./starter/test-file.txt");
    // stream.on("data", (piece) => {
    //     res.write(piece);
    // });
    // stream.on("end", () => {
    //     res.end();
    // });
    // stream.on("error", (err) => {
    //     res.statusCode = 500;
    //     res.end("File Not Found");
    // });

    // solution-3 Perfect solution

    const stream = fs.createReadStream("./starter/test-file.txt");
    stream.pipe(res); // NOTE: readablesource.pipe(destination)
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening.....");
});
