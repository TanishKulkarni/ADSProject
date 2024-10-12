import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [userID, setUserID] = useState('');

    const handleLogin = async () => {
        const { data } = await axios.post('/api/users/login', { userID });
        alert(data);
    };

    return (
        <div>
            <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
