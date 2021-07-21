import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderStatistics from '../../ui-component/statistics/headerStatistics';
import { boxOne, boxThere } from '../../ui-component/statistics/data';
import BoxOne from '../../ui-component/statistics/boxOne';
import BoxRevenue from '../../ui-component/statistics/boxRevenue';
import BoxReceived from '../../ui-component/statistics/boxReceived';
import BoxSale from '../../ui-component/statistics/boxSale';
import BoxThere from '../../ui-component/statistics/boxThere';

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
                {boxOne.map((result) => (
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>
                            <BoxOne key={result.id} res={result} />
                        </Paper>
                    </Grid>
                ))}

                <Grid item xs={12} sm={4}>
                    <Paper style={{ backgroundColor: 'rgb(103, 58, 183)' }} className={classes.paper}>
                        <BoxRevenue />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ backgroundColor: 'rgb(30, 136, 229)' }} className={classes.paper}>
                        <BoxReceived />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ backgroundColor: 'rgb(216, 67, 21)' }} className={classes.paper}>
                        <BoxSale />
                    </Paper>
                </Grid>
                {boxThere.map((result) => (
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>
                            <BoxThere key={result.id} res={result} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
