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

  if (req.method === "POST") {
    let body = "";
    req.on("end", () => {
      console.log(body);
      res.end("<h1>Got POST request.</h1>");
    });

    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button> </form>'
    );
  }
});

server.listen(5001);
