import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper, CardContent } from '@material-ui/core';

//project
// import LogoDailyUser from '../../../assets/images/dashboard/logo-daily-user';
// import LogoDailyPage from '../../../assets/images/dashboard/logo-daily-page';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(103, 58, 183)',
        color: '#fff',
        position: 'relative'
    },
    icon: {
        width: '100px',
        height: '100px',
        opacity: 0.5,
        color: '#fff'
    },
    positionIcon: {
        transform: 'rotate(25deg)',
        position: 'absolute',
        left: -17,
        bottom: -27
    },
    text: {
        textAlign: 'center'
    },
    textColor: {
        color: '#fff'
    }
}));

const DailyComponent = (theme) => {
    const classes = useStyles();
    return (
        <Paper classes=".MuiPaper-root" className={classes.root}>
            <CardContent>
                <Typography variant="subtitle2" className={classes.positionIcon}>
                    <AccountCircleIcon className={classes.icon} />
                </Typography>

                <Grid container className={classes.text}>
                    <Grid item sm={12}>
                        <Typography variant="h2" className={classes.textColor}>
                            1,658
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="body1">Daily user</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper>
    );
};

export default DailyComponent;
