const express = require('express');
const server = express();
const middleWareConfig = require('./config/middleware');
// const { userRouter, authRouter } = require('./api/routers');

middleWareConfig(server);
server.use(express.json());


// routers
// server.use('/users', userRouter);
// server.use('/auth', authRouter);

// sanity test
server.get('/', (req, res) => {
    res.status(200).json('<h1>It\'s up and running!</h1>');
})

module.exports = server;