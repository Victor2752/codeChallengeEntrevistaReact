import React, {Component} from 'react';

import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'

class Blog extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Posts} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        )
    }
}

export default Blog;