const server = require('./server.js');

const port = 3000 || process.env.PORT;

server.listen(port, (req, res) => {
    console.log(`Listening on port http://localhost:${port}`);
});