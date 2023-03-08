import React, { useState, useEffect } from 'react';

const Customers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/api/customers')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Customers</h2>
            {users.map(user => <li key={user.id}>{user.firstName} {user.lastName}</li>)}
        </div>
    );
};

export default Customers;