'use strict'
const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');

// GET: All
router.get('/', (req, res) => {
    let query = User.find({}).select('name friends learned');
    query.exec((err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

// GET: Single user
router.get('/:id', (req, res) => {
    let query = User.findById(req.params.id)
                    .populate('user', 'name learned')
                    .select('name friends learned');
    query.exec((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

// POST: Add friend of user
router.post('/:id/friend/:friend', (req, res) => {
    User.findByIdAndUpdate(req.params.id,
        { "$push": { friends: req.params.friend } },
        { new: true },
        (err) => {
            if (err) {
                throw err;
            }        
            res.json();
        }
    );
});

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            throw err;
        }        
        res.json();
    });
});

router.delete('/', (req, res) => {
    User.deleteMany({}, (err) => {
        if (err) {
            throw err;
        }        
        res.json();
    });
});

module.exports = router
