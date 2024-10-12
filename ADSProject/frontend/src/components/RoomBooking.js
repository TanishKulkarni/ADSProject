import React, { useState } from 'react';
import axios from 'axios';

function RoomBooking() {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(9);
    const [availableRooms, setAvailableRooms] = useState(0);

    const checkAvailability = async () => {
        const { data } = await axios.get(`/api/rooms/checkAvailability?start=${start}&end=${end}`);
        setAvailableRooms(data.availableRooms);
    };

    return (
        <div>
            <button onClick={checkAvailability}>Check Room Availability</button>
            <p>Available Rooms: {availableRooms}</p>
        </div>
    );
}

export default RoomBooking;
