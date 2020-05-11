const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require('../users/user-model');


router.get('/', (req, res) => {
    res.send('<h1>Restricted Page</h1>')
});

router.get('/users', (req, res) => {
    User.find()
        .then(user => {
            res.status(200).json(user)
        }).catch(err => res.status(500).json({message: 'Server Error', err}
        ))
});

router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 24)
    user.password = hash;

    User.add(user)
        .then(addUser => {
            res.status(201).json(addUser)
        }).catch(err => res.status(500).json({message: 'Server Error', err}
        ))
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    User.findById({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({message: `Welcome ${user.username}`})
            } else {
                res.status(401).json({message: 'Invalid Username or Password'})
            }
        }).catch(err => res.status(500).json({message: 'Server Error', err}
        ))
});


module.exports = router;