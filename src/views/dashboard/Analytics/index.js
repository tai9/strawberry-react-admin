import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import MarketShare from './MarketShare';
import SocialNetwork from './SocialNetwork';
import TotalRevenue from './TotalRevenue';
import OderReceive from './OrderReceive';
import BasicTable from './LatestCustomer';
import DailyComponent from './DailyComponent';

const Analytics = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Grid item>
                    <MarketShare />
                </Grid>
                <Grid item>
                    <OderReceive />
                </Grid>
                <Grid item>
                    <BasicTable />
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid item xs={12}>
                    <SocialNetwork />
                </Grid>
                <Grid item xs={12}>
                    <TotalRevenue />
                </Grid>
                <Grid item xs={12} style={{ paddingTop: 20 }}>
                    <DailyComponent />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;
