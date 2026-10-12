const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const publicPath = path.join(__dirname, "public");

const routes = {
  "/": "home.html",
  "/home": "home.html",
  "/about": "about.html",
  "/contact": "contact.html",
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const fileName = routes[url.pathname];

  if (url.pathname === "/style.css") {
    const cssPath = path.join(publicPath, "style.css");

    return fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS file not found");
      }

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  if (!fileName) {
    return fs.readFile(path.join(publicPath, "404.html"), (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(err ? "<h1>404 - Page Not Found</h1>" : data);
    });
  }

  fs.readFile(path.join(publicPath, fileName), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Server Error");
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});