import React from 'react';

const Card = ({hero, handleClick}) => {
    return (
        <div className='card' onClick={()=>handleClick(hero.id)}>
            <img src={hero.image} alt={hero.name} />
            <p>Name: {hero.name}</p>
            <p>Occupation: {hero.occupation}</p>
        </div>
    );
};

export default Card;