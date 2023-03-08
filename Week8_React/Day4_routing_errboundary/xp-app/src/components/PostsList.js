import React from 'react';

const PostsList = ({ posts }) => {
    return (

        posts.map(post => (
            <div key={post.id}><h2>{post.title}</h2>
                <p>{post.content}</p></div>
        ))

    );
};

export default PostsList;