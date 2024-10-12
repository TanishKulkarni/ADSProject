import React, { useState } from 'react';
import axios from 'axios';

function Appointment() {
    const [patient, setPatient] = useState('');
    const [doctor, setDoctor] = useState('');
    const [doctors, setDoctors] = useState([]);

    const bookAppointment = async () => {
        await axios.post('/api/appointments/bookAppointment', { patient, doctor });
        alert('Appointment booked');
    };

    const getDoctors = async () => {
        const { data } = await axios.get(`/api/appointments/getDoctors/${patient}`);
        setDoctors(data);
    };

    return (
        <div>
            <input value={patient} onChange={(e) => setPatient(e.target.value)} placeholder="Patient Name" />
            <input value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder="Doctor Name" />
            <button onClick={bookAppointment}>Book Appointment</button>
            <button onClick={getDoctors}>Get Doctors</button>
            <ul>
                {doctors.map((doc, index) => (
                    <li key={index}>{doc}</li>
                ))}
            </ul>
        </div>
    );
}

export default Appointment;
