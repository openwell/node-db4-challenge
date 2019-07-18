const express = require('express');

const server = express();

server.use(express.json());
server.get('/');

module.exports = server;