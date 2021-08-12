import React from 'react';

//material ui
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//project import
import CardBillDue from './CardBillDue';
import CardTotal from './CardTotal';
import CardPlan from './CardPlan';
import Payment from './Payment';
import History from './History';

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
export default function Billing() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={4} sm={6}>
                <Paper className={classes.paper}>
                    <CardBillDue />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
                <Paper className={classes.paper}>
                    <CardTotal />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
                <Paper className={classes.paper}>
                    <CardPlan />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Payment />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <History />
                </Paper>
            </Grid>
        </Grid>
    );
}
