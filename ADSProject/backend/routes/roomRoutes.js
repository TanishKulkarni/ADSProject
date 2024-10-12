const express = require('express');
const router = express.Router();
const SegmentTree = require('../models/SegmentTree');

let roomSegmentTree = new SegmentTree(10);
let rooms = new Array(10).fill(1); // Initially all rooms available
roomSegmentTree.build(rooms, 1, 0, 9);

router.get('/checkAvailability', (req, res) => {
    const { start, end } = req.query;
    const availableRooms = roomSegmentTree.query(1, 0, 9, parseInt(start), parseInt(end));
    res.status(200).json({ availableRooms });
});

router.post('/book', (req, res) => {
    const { roomIndex } = req.body;
    roomSegmentTree.update(1, 0, 9, roomIndex, 0);
    res.status(200).send('Room booked successfully');
});

module.exports = router;
