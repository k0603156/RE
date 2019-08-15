import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Posts = (routes) => {
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline/>
            <div>
                <ul>
                    <li><Link to='/user/posts/1'>Post 1</Link></li>
                    <li><Link to='/user/posts/2'>Post 2</Link></li>
                    <li><Link to='/user/posts/3'>Post 3</Link></li>
                </ul>
            </div>
        </Container>);
}
export default Posts;