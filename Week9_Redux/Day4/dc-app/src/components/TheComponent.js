import React from 'react';

const styleDiv = {
    padding: 20,
    minHeight: 100,
    background: 'white',
    borderRadius: 7,
    color: 'black',
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const styleHeader = {
    color: 'gray',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
}

const TheComponent = ({icon, label, number}) => {
    return (
        <div style={styleDiv}>
            <div style={styleHeader}><span>{icon}</span><span>{label}</span></div>
            <h1>{number}</h1>
        </div>
    );
};

export default TheComponent;