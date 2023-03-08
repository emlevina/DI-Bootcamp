import React, { useState, useEffect } from 'react';

const Ex1 = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => {
                if(!res.ok) throw new Error ('did not get response from server')
                return res.json()
            })
            .then(data => setUsers(data))
            .catch(err => console.log(err.message))
    }, [])
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.username}</li>)}
            </ul>
        </div>
    );
};

export default Ex1;