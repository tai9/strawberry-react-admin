import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// third-party
import Chart from 'react-apexcharts';

const dataChart = {
    series: [66, 50, 40, 30],

    options: {
        labels: ['extremelyx Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
        colors: ['#f4433c', '#f95e58', '#fb7772', '#ffa29e'],

        legend: {
            position: 'bottom',
            verticalAlign: 'bottom',
            containerMargin: {
                bottom: 1
            }
        },
        pie: {
            donut: {
                labels: {
                    show: false
                }
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
        marginTop: '12px'
    },
    icon: { marginLeft: '10px', color: 'rgb(33, 150, 243)' },
    imgDes: { alignItems: 'center', display: 'flex', marginLeft: '10px' }
}));

const Customer = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="subtitle4" sx={{ color: 'black' }}>
                            Customer Satisfaction{' '}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div className={classes.chart}>
                <Chart options={dataChart.options} series={dataChart.series} height={270} type="pie" />
            </div>
        </Card>
    );
};

export default Customer;
