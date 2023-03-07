import React from 'react';

const UserFavouriteColors = ({favAnimals}) => {
    return (
        <ul>
            {favAnimals.map((animal, i) => <li key={i}>{animal}</li>)}
        </ul>
    );
};

export default UserFavouriteColors;