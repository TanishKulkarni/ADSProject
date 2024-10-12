const express = require('express');
const router = express.Router();
const Graph = require('../models/Graph');

let appointmentGraph = new Graph();

router.post('/bookAppointment', (req, res) => {
    const { patient, doctor } = req.body;
    appointmentGraph.addEdge(patient, doctor);
    res.status(200).send('Appointment booked successfully');
});

router.get('/getDoctors/:patient', (req, res) => {
    const { patient } = req.params;
    const doctors = appointmentGraph.getDoctors(patient);
    res.status(200).json(doctors);
});

module.exports = router;
