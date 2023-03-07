import React from 'react';

const Form = ({ handleChange }) => {
    const onChangeHandler = (e) => {
        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData.entries())
        handleChange(object)
    }

    const form_style = {
        padding: '30px',
        background: 'lightblue',
        alignItems: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }

    return (
        <form action="" onChange={onChangeHandler} style={form_style}>
            <input type="text" name="fname" placeholder='first name' />
            <input type="text" name="lname" placeholder='last name' />
            <input type="number" name="age" placeholder='age' />

            <div><input type="radio" value='male' name='gender' id='male' />
                <label htmlFor='male'>male</label>
                <input type="radio" value='female' name='gender' id='female' />
                <label htmlFor='female'>female</label>
            </div >

            <select name="destination" id="destination" defaultValue='default'>
                <option value="default" disabled>Select your destination</option>
                <option value="Georgia">Georgia</option>
                <option value="Israel">Israel</option>
                <option value="USA">USA</option>
            </select>
            <div>
                <input type="checkbox" name='nutsFree' id='nutsFree' />
                <label htmlFor="nutsFree">Nuts free</label>
            </div>
            <div>
                <input type="checkbox" name='lactoseFree' id='lactoseFree' />
                <label htmlFor="lactoseFree">Lactose free</label>
            </div>
            <div>
                <input type="checkbox" name='vegan' id='vegan' />
                <label htmlFor="vegan">Vegan</label>
            </div>
            
            <button>submit</button>
        </form >
    );
};

export default Form;