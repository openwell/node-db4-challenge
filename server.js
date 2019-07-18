const express = require("express");
const recipeRoute = require("./recipes/recipe-route");
const server = express();

server.use(express.json());
server.use(logger);

server.use("/api/recipes", recipeRoute);

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
