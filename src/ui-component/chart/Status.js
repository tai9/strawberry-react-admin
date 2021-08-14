import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
//-----------------------|| DASHBOARD - BAJAJ AREA CHART ||-----------------------//

const chartData = {
    type: 'area',
    height: 120,
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
            curve: 'smooth',
            width: 3
        },

        theme: {
            monochrome: {
                enabled: true,
                color: '#ffffff',
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
            data: [20, 10, 18, 12, 25, 10, 20]
        }
    ]
};

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'rgb(0, 200, 83)'
    },
    content: {
        padding: '0px !important'
    },
    contentContainer: {
        padding: '16px',
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontWeight: 400
    }
}));

const Status = () => {
    const classes = useStyles();
    const theme = useTheme();

    const orangeDark = theme.palette.secondary[200];

    React.useEffect(() => {
        const newSupportChart = {
            ...chartData.options,
            colors: [orangeDark],
            tooltip: {
                theme: 'light'
            }
        };
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    }, [orangeDark]);

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h3" sx={{ color: 'white' }}>
                                    2500
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" sx={{ color: 'white' }}>
                                    95%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle4" sx={{ color: 'white' }}>
                            Total Status
                        </Typography>
                    </Grid>
                </Grid>
                <Chart {...chartData} />
            </CardContent>
        </Card>
    );
};

export default Status;
