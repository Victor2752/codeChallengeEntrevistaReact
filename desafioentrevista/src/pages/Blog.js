import React, {Component} from 'react';

import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'

import './Blog.css';

class Blog extends Component {
    render(){
        return(
            <div className='Blog'>
                <Route path="/" exact component={Posts} />
                <Route path='/:id' exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;