const router = require('express').Router();
const bcrypt = require('bcryptjs');

const tokenService = require('../../auth/token-service.js');
const { addUser, getUserByFilter } = require('../helpers');

// takes username, password, department (all strings)
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    addUser(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

router.post('/login', (req, res) => {
let { username, password } = req.body;

getUserByFilter({ username })
    .first()
    .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenService.generateToken(user);
        res.status(200).json({
        message: `Welcome ${user.username}!, have a token...`,
        token,
        department: user.department,
        });
    } else {
        res.status(401).json({ message: 'Invalid Credentials' });
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});

// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imthc2lhIiwiaWF0IjoxNTYwNDc2MjI3LCJleHAiOjE1NjA1NjI2Mjd9.9YaU4zLjzXCGyVkOb8STUArylzeXxGbrXPV-QD_AlF
// {
// 	"username": "kasia",
// 	"password": "bondarava"
// }

module.exports = router;