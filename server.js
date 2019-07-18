const express = require("express");

const server = express();

server.use(express.json());
server.use(logger);
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some code!</h2>`);
});

server.all("*", (req, res) => {
  res.status(404).json("Sorry No Such Location");
});

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

module.exports = server;
