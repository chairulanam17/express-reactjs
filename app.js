// const fs = require("fs");

// const userName = "Anam";

// fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("wrote file");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("incoming req");
  console.log(req.method, req.url);

  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Sukses!</h1>");
});

server.listen(5001);
