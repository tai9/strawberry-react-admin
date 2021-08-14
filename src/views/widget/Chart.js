import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TotalSale from '../../ui-component/chart/Sale';
import Comment from '../../ui-component/chart/Comment';
import Status from '../../ui-component/chart/Status';
import Visitors from '../../ui-component/chart/Visitors';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         padding: theme.spacing(3)
//     }
// }));
const Chart = () => {
    // const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
                <Paper>
                    <TotalSale />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper>
                    <Comment />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper>
                    <Status />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper>
                    <Visitors />
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Chart;
