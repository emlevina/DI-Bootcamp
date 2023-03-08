import React from 'react';

const Example3 = ({ experiences }) => {
    const experiencesJSX = experiences.map((exp, i) => (
        <div key={i}>
            <img src={exp.logo} width='100px'/>
            <a href={exp.url}><h2>{exp.companyName}</h2></a>
            {exp.roles.map((role, i) => (
                <div key={i}>
                    <h3>{role.title}</h3>
                    <p>{role.startDate} {role.location}</p>
                    <p>{role.description}</p>
                </div>
            ))}
        </div>
    ))
    return (
        <div>
            {experiencesJSX}
        </div>
    );
};

export default Example3;