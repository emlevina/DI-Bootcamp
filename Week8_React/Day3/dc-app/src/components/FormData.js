import React from 'react';

const FormData = ({formData}) => {
    const formData_style = {
        padding: '30px',
        background: 'lightpink',
        alignItems: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }

    return (
        <div style={formData_style}>
            <p>First name: {formData && formData.fname}</p>
            <p>Last name: {formData && formData.lname}</p>
            <p>Age: {formData && formData.age}</p>
            <p>Genger: {formData && formData.gender}</p>
            <p>Destination: {formData && formData.destination}</p>
            <p>**Nuts free: {formData.nutsFree === 'on' ? 'Yes' : 'No'}</p>
            <p>**Lactose free: {formData.lactoseFree === 'on' ? 'Yes' : 'No'}</p>
            <p>**Vegan: {formData.vegan === 'on' ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default FormData;