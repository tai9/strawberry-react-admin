import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Subscription from './Subscription';
import Opt from './Opt';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgb(227, 242, 253)',
        margin: '10px'
    }
}));
const Notification = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    <Subscription />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <Opt />
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Notification;
