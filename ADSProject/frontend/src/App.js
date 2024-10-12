import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import RoomBooking from './components/RoomBooking';
import Appointment from './components/Appointment';

function App() {
    return (
        <Router>
            <Route path="/login" component={Login} />
            <Route path="/room-booking" component={RoomBooking} />
            <Route path="/appointment" component={Appointment} />
        </Router>
    );
}

export default App;
