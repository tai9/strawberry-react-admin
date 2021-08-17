import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// third-party
import Chart from 'react-apexcharts';

// project imports

const chartData = {
    type: 'area',
    height: 50,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            },
            toolbar: {
                autoSelected: 'pan',
                show: false
            }
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 3
        },
        grid: {
            borderColor: '#555',
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        markers: {
            size: 4,
            strokeColor: ['#ffffff'],
            colors: 'rgb(33, 150, 243)',
            strokeWidth: 3
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.65
            }
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
                    formatter: (seriesName) => 'series1 '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'Series 1',
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
        }
    ]
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
    icon: { marginLeft: '10px', color: 'red' }
}));

const Visits = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ color: 'black' }}>
                            $16, 756
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle4" sx={{ color: 'gray' }}>
                            Visits <ArrowDropDownIcon className={classes.icon} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div className={classes.chart}>
                <Chart {...chartData} />
            </div>
        </Card>
    );
};

export default Visits;
