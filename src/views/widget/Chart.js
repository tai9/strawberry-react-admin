import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TotalSale from '../../ui-component/chart/Sale';
import Comment from '../../ui-component/chart/Comment';
import Status from '../../ui-component/chart/Status';
import Visitors from '../../ui-component/chart/Visitors';
import MarketShare from '../dashboard/analytics/MarketShare';
import Revenue from '../../ui-component/chart/Revenue';
import User from '../../ui-component/chart/User';
import Timeout from '../../ui-component/chart/Timeout';
import View from '../../ui-component/chart/Views';
import Session from '../../ui-component/chart/Session';
import Avg from '../../ui-component/chart/Avg';
import Bounce from '../../ui-component/chart/Bounce';
import SalePerDate from '../../ui-component/chart/SalePerDate';
import OrderPerMonth from '../../ui-component/chart/OrderPerMonth';

const Chart = () => {
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
            <Grid item xs={12} md={7}>
                <Paper>
                    <MarketShare />
                </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
                <Paper>
                    <Revenue />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Paper>
                    <User />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Paper>
                    <Timeout />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Paper>
                    <View />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Paper>
                    <Session />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Paper>
                    <Avg />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Paper>
                    <Bounce />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper>
                    <SalePerDate />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper>
                    <OrderPerMonth />
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Chart;
