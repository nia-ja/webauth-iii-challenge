const { getUsers } = require('../helpers');
const router = require('express').Router();

// const restricted = require('../auth/restricted-middleware.js');

router.get('/', async (req, res) => {
    try {
        const users = await getUsers()
        if (users) {
            return res.status(200).json(users)
        } else {
            res.status(400).send({ message: 'Users not found' })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
});

module.exports = router;