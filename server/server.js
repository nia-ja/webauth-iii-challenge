const express = require('express');
const server = express();
const middleWareConfig = require('./config/middleware')
const { usersRouter, authRouter } = require('./api/routers');

middleWareConfig(server);
// server.use(express.json());


// routers
server.use('/users', usersRouter);
server.use('/auth', authRouter);

// sanity test
server.get('/', (req, res) => {
    res.status(200).json(`It's up and running!`);
})

module.exports = server;