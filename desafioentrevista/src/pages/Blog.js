import React, {Component} from 'react';

import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'

export default function Home({ boxData }) {
    return(
        <div>
            <Route path="/" exact component={Posts} />
            <Route path="/:id" exact component={FullPost} />
        </div>
    )
} 