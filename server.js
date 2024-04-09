const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    const temp = fs.readFileSync("./test.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });

    res.end(temp);
  } else {
    res.end("404 not found");
  }
});

server.listen(8000, "192.168.70.64", () => {
  console.log("listening to requests on port 8000");
});
