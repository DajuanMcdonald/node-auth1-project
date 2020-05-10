const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require('../users/user-model');





router.get('/', (req, res) => {
    res.send('<h1>Restricted Page</h1>')
})

router.get('/users', (req, res) => {
    User.find()
        .then(user => {
            res.status(200).json(user)
        }).catch(err => res.status(500).json({message: 'Server Error', err}))
})


module.exports = router;