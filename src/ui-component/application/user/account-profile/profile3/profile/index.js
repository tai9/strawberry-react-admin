import React from 'react';

//material ui
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfilePicture from './ProfilePicture';

//project import
import Edit from './Edit';

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
const Profile = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <ProfilePicture />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    <Edit />
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Profile;
