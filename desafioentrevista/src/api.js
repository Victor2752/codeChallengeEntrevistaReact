import React from 'react';

import axios from 'axios';

export default class PostList extends React.Component {
  state = {
    post: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const post = res.data;
        this.setState({ post });
      })
  }

  render() {
    return (
      <>
        { this.state.post.map(post => <li>{post.title}</li>)}
      </>
    )
  }
}