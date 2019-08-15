import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Post = (routes) => {
    const idPost = routes.route.match.params.idPost;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div> Post {idPost} </div>
      </Container>
    );
}
export default Post;
