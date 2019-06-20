const { getUsers, getUserById } = require('../helpers');
const router = require('express').Router();

const restricted = require('../../auth/restricted-middleware.js');

router.get('/', restricted, async (req, res) => {
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

router.get('/:id', restricted, (req, res) => {
    getUserById(req.params.id)
      .then(user => {
        if (user) {
            res.status(200).json(user);
          } else {
            res.status(400).json({ message: "There's no user with this id"})
          }
      })
      .catch(err => res.send(err));
});

module.exports = router;