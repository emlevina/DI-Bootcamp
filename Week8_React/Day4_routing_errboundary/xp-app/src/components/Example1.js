import React from 'react';

const Example1 = ({socialMedias}) => {
    const map = socialMedias.map((item, index) => <p key={index}>{item}</p>)
    return (
        <div>
            {map}
        </div>
    );
};

export default Example1;