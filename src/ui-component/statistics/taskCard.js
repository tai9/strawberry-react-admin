import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(3)
    },
    item: {
        padding: '5px 10px'
    },
    content: {
        margin: '10 0',
        display: 'inline-block'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        color: 'black',
        margin: '7px 0'
    },
    title: {
        fontSize: 13,
        fontWeight: 400,
        color: 'gray'
    }
}));

export default function TaskCard() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container>
                <Grid item xs={12} lg={3} sm={6}>
                    <div className={classes.item}>
                        <div className={classes.content}>
                            <div className={classes.title}>Published Project</div>
                            <div className={classes.data}>532</div>
                        </div>
                        <LinearProgress variant="determinate" value={40} color="secondary" />{' '}
                    </div>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <div className={classes.item}>
                        <div className={classes.content}>
                            <div className={classes.title}>Completed Task</div>
                            <div className={classes.data}>4,569</div>
                        </div>
                        <LinearProgress variant="determinate" value={70} color="primary" />{' '}
                    </div>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <div className={classes.item}>
                        <div className={classes.content}>
                            <div className={classes.title}>Pending Task</div>
                            <div className={classes.data}>1,005</div>
                        </div>
                        <LinearProgress variant="determinate" value={30} color="secondary" />{' '}
                    </div>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <div className={classes.item}>
                        <div className={classes.content}>
                            <div className={classes.title}>Issues </div>
                            <div className={classes.data}>365</div>
                        </div>
                        <LinearProgress variant="determinate" value={10} color="primary" />{' '}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
