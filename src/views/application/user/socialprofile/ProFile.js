import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

import FriendAndFollow from './FriendAndFollow';
import About from './About';
import FormPost from './FormPost';
import Post from './Posts/Post';

const ProFile = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                    <FriendAndFollow />
                    <About />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <FormPost />
                    <Post />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ProFile;
