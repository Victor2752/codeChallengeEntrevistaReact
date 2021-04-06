import React from 'react';
import axios from 'axios';

import API from './'

export default class postList extends React.Component{
    state = {
        post: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                const post = res.data;
                this.setState({ post });
            })
    }

    render(){
        return(
            <ul>
                {this.state.post.map(post => <li>{post.title}</li>)}
            </ul>
        )
    }
}