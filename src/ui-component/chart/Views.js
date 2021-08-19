import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// third-party
import Chart from 'react-apexcharts';

const chartData = {
    type: 'line',
    height: 18,
    series: [
        {
            name: 'series1',
            data: [2, 1, 2, 1, 1, 3, 0]
        }
    ],
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
        stroke: {
            width: 2
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => 'series-1'
                }
            }
        },
        colors: ['#c40000']
    }
};

// style constant
const useStyles = makeStyles((theme) => ({
    card: { padding: '20px' },

    content: {
        padding: '0px !important'
    },
    contentContainer: {
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontWeight: 400
    },
    chart: {
        padding: '30px 0 10px 0'
    }
}));

const View = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle4" sx={{ color: 'gray' }}>
                                    Views
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ color: 'black' }}>
                            9, 454
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.chart}>
                    <Chart {...chartData} />
                </div>
            </CardContent>
        </Card>
    );
};

export default View;
