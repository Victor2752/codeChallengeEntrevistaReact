import React from 'react';

import './Post.css';

const post = (props) =>(
    <article className="Post">
        <h1>{props.title}</h1>
    </article>
)

export default post;