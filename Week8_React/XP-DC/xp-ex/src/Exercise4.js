import React from 'react';
import './Exercise4.css'

const Exercise4 = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
        <div>
            <h1 style={style_header}>This is a header</h1>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tempore accusamus. Eaque harum pariatur incidunt omnis sapiente ea. Illum expedita magnam alias animi dolor eveniet unde earum perferendis illo quisquam.</p>
            <a href='google.com'>Some link</a>
            <form action="">
                <input type="text" />
                <button>Send</button>
            </form>
            <ul>
                <li>Hi</li>
                <li>I'm</li>
                <li>A list</li>
            </ul>
            <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png" alt="" srcset="" width="100px"/>
        </div>
    );
};

export default Exercise4;