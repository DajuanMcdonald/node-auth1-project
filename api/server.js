const express = require('express');
const api = require('../api/api-router')
const server = express();


server.use('/api', api)


module.exports = server;