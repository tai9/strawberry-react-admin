import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        display: 'flex',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        padding: '24px',
        fontSize: '18px',
        color: '#000',
        fontWeight: '500'
    },
    line: {
        margin: '0px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        borderColor: 'rgb(238, 238, 238)',
        opacity: 1
    },
    content: {
        padding: '24px'
    },
    value: {
        margin: '0',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.167',
        color: 'rgb(33, 33, 33)',
        textAlign: 'center'
    },
    linear: {
        margin: '15px 0'
    },
    title: {
        fontSize: '12px'
    },
    data: {
        fontSize: '15px',
        color: 'black',
        fontWeight: '600'
    }
}));
export default function CustomerCard() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.header}>Customer satisfaction</div>
                <hr className={classes.line}></hr>
                <div className={classes.content}>
                    <div className={classes.value}>50%</div>
                    <div className={classes.linear}>
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                    <div className={classes.statistical}>
                        <Grid container>
                            <Grid item xs={4}>
                                <div className={classes.title}>previous</div>
                                <div className={classes.data}>56.75</div>
                            </Grid>{' '}
                            <Grid item xs={4}>
                                <div className={classes.title}>Change</div>
                                <div className={classes.data}>+12.60</div>
                            </Grid>{' '}
                            <Grid item xs={4}>
                                <div className={classes.title}>Trend</div>
                                <div className={classes.data}>23.78</div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
