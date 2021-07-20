import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderStatistics from '../../ui-component/statistics/headerStatistics';
import { box } from '../../ui-component/statistics/data';
import BoxOne from '../../ui-component/statistics/boxOne';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    }
}));

export default function Statistics() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <HeaderStatistics />
                    </Paper>
                </Grid>
                {box.map((result) => (
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>
                            <BoxOne key={result.id} res={result} />
                        </Paper>
                    </Grid>
                ))}

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
