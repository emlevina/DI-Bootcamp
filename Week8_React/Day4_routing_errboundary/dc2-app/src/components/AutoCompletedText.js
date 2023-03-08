import React, { useState, useEffect } from 'react';
import countries from '../Countries'

const AutoCompletedText = () => {
    const [filteredCountries, setFilteredCountries] = useState([])
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        setFilteredCountries(countries.filter(country => country.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleClick = (e, country) => {
        setText(country)
        setFilteredCountries([])
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={text} />
            <p>Suggestions: {filteredCountries.length}</p>
            <ul>
                {filteredCountries.map((country, i) => <li key={i} onClick={(e) => handleClick(e, country)}>{country}</li>)}
            </ul>
        </div>
    );
};

export default AutoCompletedText;