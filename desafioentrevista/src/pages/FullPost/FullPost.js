import React, { Component } from 'react';
import axios from 'axios';

class FullPost extends Component {
    state={
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) { //verifica se o id não está nulo
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    console.log(response.data, 'DARA');
                    this.setState({ loadedPost: response.data})
                })
            }
        }
    }

    render (){
        let post = <p>Please select a Post!</p>;
    
        if(this.props.id) {
            post = <p>Loading..!</p>;
        }
    
        if(this.state.loadedPost){
            post = (
                <div>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                </div>
            );
        }

        return post;
    }
    
}

export default FullPost;

