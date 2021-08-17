import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'; // third-party
import Chart from 'react-apexcharts';

// project imports

const chartData = {
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 54, 25, 66, 41, 89, 63, 25, 66, 41, 89, 63, 25, 44, 12, 36, 54, 25, 66, 41, 89, 63]
        }
    ],
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        colors: ['rgba(103, 58, 183, 0.85)'],
        plotOptions: {
            bar: {
                columnWidth: '80%',
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
    title: { display: 'flex', fontWeight: '500' },
    title2: { display: 'flex', fontWeight: '500', marginTop: '5px', alignItems: 'center' },

    des: {
        marginLeft: '10px'
    },
    fontStyle: {
        fontWeight: 400
    },
    chart: {
        marginTop: '20px'
    },
    icon: { marginLeft: '10px', color: 'rgb(33, 150, 243)' },
    imgDes: { alignItems: 'center', display: 'flex', marginLeft: '10px' }
}));

const NewStock = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="subtitle4" sx={{ color: 'black' }}>
                            New Stock
                        </Typography>
                        <Typography variant="subtitle2" className={classes.des} sx={{ color: 'gray' }}>
                            (Purchased)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.title2}>
                        <Typography variant="h4" sx={{ color: 'black' }}>
                            0.85%
                        </Typography>
                        <Typography variant="subtitle5" className={classes.imgDes} sx={{ color: 'rgb(2, 136, 209)' }}>
                            <ArrowUpwardIcon />
                            0.50%
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div className={classes.chart}>
                <Chart {...chartData} type="bar" height={200} />
            </div>
        </Card>
    );
};

export default NewStock;
