'use strict'
const express = require('express');
const router = express.Router();
const Topic = require('../../models/topic.model');

// GET: All
router.get('/', (req, res) => {
    Topic.find((err, topics) => {
        if (err) {
            res.send(err);
        }
        res.json(topics);
    });
});

// POST: Add topic
router.post('/', (req, res) => {
    let topic = new Topic(req.body);
    topic.save();
    res.json(topic);
});

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            throw err;
        }        
        res.json();
    });
});

module.exports = router
