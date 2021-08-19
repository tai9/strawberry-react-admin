import React from 'react';

// material-ui
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textInfo: {
        width: '100%'
    },
    btnChangePassword: {
        marginTop: '25px'
    },
    changePassword: {
        minHeight: '300px'
    }
}));

const ChangPassword = () => {
    const classes = useStyles();
    return (
        <div className={classes.changePassword}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        className={classes.textInfo}
                        defaultValue="Selena Litten"
                        type="password"
                        required
                        id="outlined-required"
                        label="Current Password"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        className={classes.textInfo}
                        defaultValue="Selena "
                        type="password"
                        required
                        id="outlined-required"
                        label="Current Password"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        className={classes.textInfo}
                        defaultValue="Selena "
                        type="password"
                        required
                        id="outlined-required"
                        label="Current Password"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <div className={classes.btnChangePassword}>
                <Button variant="outlined" color="primary">
                    Change Password
                </Button>
            </div>
        </div>
    );
};

export default ChangPassword;
