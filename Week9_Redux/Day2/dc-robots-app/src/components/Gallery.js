import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({ robot }) => {
    return (
        <div className='card'>
            <img src={robot.image} alt=''/> 
            <p>{robot.name}</p>
        </div>
    )
}

const Gallery = () => {
    const robots = useSelector(state => state.robots)
    const search = useSelector(state => state.search)
    return (
        <div className='gallery'>
            {robots
                .filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()))
                .map(robot => <Card robot={robot} key={robot.id} />)
            }
        </div>
    );
};

export default Gallery;