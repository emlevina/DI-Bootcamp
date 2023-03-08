import React from 'react';

const Example2 = ({ skills }) => {
    const skillsJSX = skills.map((skill, i) => (
        <div key={i}>
            <h3>{skill.Area}</h3>
            <ul>{skill.SkillSet.map((lang, i) => (
                <li key={i}>{lang.Name}</li>
            ))}</ul>
        </div>
    ))
    return (
        <div>
            {skillsJSX}
        </div>
    );
};

export default Example2;