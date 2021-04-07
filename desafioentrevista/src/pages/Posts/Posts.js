import React, { Component } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

import Post from '../../components/Post/Post';

class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPost: id})
    }

    componentDidMount() {
        axios.get('/posts')
        .then(response => {
            const posts = response.data
            const updatePosts = posts.map(post => {
                return{ 
                    ...post
                }
            })
            this.setState({posts:updatePosts})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {

        let posts =<p styled={{textAlign: "center"}}>Ocorreu um erro inesperado!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map( post =>{
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                )
            });
        }

        return(
            <section>
                {posts}
            </section>
        )
    }
}

export default Posts;