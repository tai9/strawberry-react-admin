import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

// third-party
import Chart from 'react-apexcharts';

// style constant
const useStyles = makeStyles((theme) => ({
    content: {
        padding: '20px',
        backgroundColor: 'rgb(30, 136, 229)'
    },
    contentContainer: {
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontWeight: 400
    },
    data: {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        alignTtems: 'center'
    },
    dataItem: { marginRight: '10px' },
    contentData: { padding: '25px' },
    contentDataItem: { textAlign: 'center' }
}));
const chartData = {
    type: 'line',
    height: 130,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 1
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 100
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => 'series1'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'series1',
            data: [55, 35, 75, 25, 90, 50]
        }
    ]
};

//-----------------------|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||-----------------------//

const OrderPerMonth = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Grid container className={classes.contentContainer}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle4" sx={{ color: 'white' }}>
                                        Order Per Month
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4" sx={{ color: 'white' }}>
                                        <div className={classes.data}>
                                            <span className={classes.dataItem}>
                                                <TrendingDownIcon />
                                            </span>
                                            <span>28%</span>
                                        </div>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Chart {...chartData} />
                </CardContent>{' '}
                <div className={classes.contentData}>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className={classes.contentDataItem}>
                                <Typography variant="h3" sx={{ color: 'black' }}>
                                    1695
                                </Typography>
                                <Typography variant="subtitle4">Total Orders</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.contentDataItem}>
                                <Typography variant="h3" sx={{ color: 'black' }}>
                                    321
                                </Typography>
                                <Typography variant="subtitle4">Today Orders</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Card>
        </div>
    );
};

export default OrderPerMonth;
