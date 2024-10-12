const express = require('express');
const router = express.Router();
const AVLTree = require('../models/AVLTree');

let userTree = new AVLTree();

router.post('/register', (req, res) => {
    const { userID, userData } = req.body;
    userTree.root = userTree.insert(userTree.root, userID, userData);
    res.status(201).send('User registered successfully');
});

router.post('/login', (req, res) => {
    const { userID } = req.body;
    const user = userTree.search(userTree.root, userID);
    if (user) {
        res.status(200).send(`Welcome ${user.userData.name}`);
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;
