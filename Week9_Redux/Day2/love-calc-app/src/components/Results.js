import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
    const results = useSelector(state => state.results)

    return (
        <div className='results'>
            {results.result && (
                <>
                    <p>{results.fname} & {results.sname}</p>
                    <p>{results.percentage}% compatible</p>
                    <p>{results.result}</p>
                </>
            )}
        </div>
    );
};

export default Results;