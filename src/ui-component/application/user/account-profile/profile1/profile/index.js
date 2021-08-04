import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfileCard from './profileCard';
import About from './about';
import Education from './education';
import Employment from './employment';
import Skill from './skill';
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
export default function Profile() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={5}>
                {' '}
                <Paper className={classes.paper}>
                    <ProfileCard />
                </Paper>
            </Grid>
            <Grid item xs={12} md={7}>
                {' '}
                <Paper className={classes.paper}>
                    <About />
                </Paper>
                <Paper className={classes.paper}>
                    <Education />
                </Paper>
                <Paper className={classes.paper}>
                    <Employment />
                </Paper>
                <Paper className={classes.paper}>
                    <Skill />
                </Paper>
            </Grid>
        </Grid>
    );
}
