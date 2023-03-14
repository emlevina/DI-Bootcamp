import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRobots } from '../actions';

const Card = ({ robot }) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${robot.id}?200x200`} alt='' />
            <p>{robot.name}</p>
        </div>
    )
}

const Gallery = () => {
    const robots = useSelector(state => state.robots)
    const search = useSelector(state => state.search)
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRobots())
    }, [dispatch])

    return (
        <div className='gallery'>
            
            {isLoading ? 'Loading...' : (robots
                .filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()))
                .map(robot => <Card robot={robot} key={robot.id} />))
            }
        </div>
    );
};

export default Gallery;