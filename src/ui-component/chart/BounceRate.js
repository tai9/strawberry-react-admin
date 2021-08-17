import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// third-party
import Chart from 'react-apexcharts';

// project imports

const chartData = {
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 54, 25, 66, 41, 89, 63]
        }
    ],
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        colors: ['#02de44'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
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
                    formatter: (seriesName) => 'series-1 '
                }
            },
            marker: {
                show: false
            }
        }
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
        marginTop: '20px'
    },
    icon: { marginLeft: '10px', color: 'rgb(33, 150, 243)' }
}));

const BounceRate = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ color: 'black' }}>
                            49.54%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle4" sx={{ color: 'black' }}>
                            Bounce Rate
                            <ArrowDropUpIcon className={classes.icon} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div className={classes.chart}>
                <Chart {...chartData} type="bar" height={50} />
            </div>
        </Card>
    );
};

export default BounceRate;
