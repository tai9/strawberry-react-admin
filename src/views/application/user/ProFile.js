import React from 'react';
import { Grid } from '@material-ui/core';

// material-ui
import { makeStyles } from '@material-ui/styles';
import FriendAndFollow from './FriendAndFollow';
import About from './About';

// style constant
const useStyles = makeStyles((theme) => ({
    
}));

const ProFile = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item sm={12} md={4}>
                    <FriendAndFollow/>
                    <About/>
                </Grid>
                <Grid item sm={12} md={8}></Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ProFile;
