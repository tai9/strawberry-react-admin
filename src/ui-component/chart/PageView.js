import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import LaptopIcon from '@material-ui/icons/Laptop';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// third-party
import Chart from 'react-apexcharts';

//-----------------------|| DASHBOARD - BAJAJ AREA CHART ||-----------------------//

const chartData = {
    series: [
        {
            data: [66.6, 29.7, 32.8, 50.03]
        }
    ],
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
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
        xaxis: {
            categories: [['Desktop'], ['Mobile'], ['Tablet'], ['Laptop']],
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        tooltip: {
            y: {
                title: {
                    formatter: (seriesName) => 'series1'
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
    fontStyle: {
        fontWeight: 400
    },
    chart: {
        padding: '30px 0 10px 0'
    },
    data: { marginTop: '80px', display: 'block' },
    iconData: { textAlign: 'center', alignSelf: 'center' },
    dataItem: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: '-16px',
        marginLeft: '-16px',
        justifyContent: 'center',
        width: 'calc(100% + 16px)',
        overflow: 'hidden',
        padding: '10px 20px',
        alignItems: 'center',
        textAlign: 'center'
    }
}));

const PageView = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitl6" sx={{ color: 'black' }}>
                                    Page view by device
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="h3" sx={{ color: 'black' }}>
                                    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                                        Weekly
                                    </Button>
                                    <Menu
                                        id="fade-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        TransitionComponent={Fade}
                                    >
                                        <MenuItem onClick={handleClose}>1 week</MenuItem>
                                        <MenuItem onClick={handleClose}>2 Years</MenuItem>
                                        <MenuItem onClick={handleClose}>3 Monthes</MenuItem>
                                    </Menu>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} className={classes.data}>
                        <Grid container className={classes.dataItem} style={{ color: 'rgb(33, 150, 243)' }}>
                            <Grid item xs={3}>
                                <ImportantDevicesIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" sx={{ color: 'black' }}>
                                    66.6%
                                </Typography>{' '}
                            </Grid>
                            <Grid item xs={3}>
                                <ArrowUpwardIcon />
                            </Grid>
                            <Grid item xs={3}>
                                2%
                            </Grid>
                        </Grid>
                        <Grid container className={classes.dataItem} style={{ color: 'rgb(0, 200, 83)' }}>
                            <Grid item xs={3}>
                                <PhonelinkLockIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" sx={{ color: 'black' }}>
                                    29.7%
                                </Typography>{' '}
                            </Grid>
                            <Grid item xs={3}>
                                <ArrowUpwardIcon />
                            </Grid>
                            <Grid item xs={3}>
                                3%
                            </Grid>
                        </Grid>
                        <Grid container className={classes.dataItem} style={{ color: 'rgb(244, 67, 54)' }}>
                            <Grid item xs={3}>
                                <TabletAndroidIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" sx={{ color: 'black' }}>
                                    32.8%
                                </Typography>{' '}
                            </Grid>
                            <Grid item xs={3}>
                                <ArrowDownwardIcon />
                            </Grid>
                            <Grid item xs={3}>
                                8%
                            </Grid>
                        </Grid>
                        <Grid container className={classes.dataItem} style={{ color: 'rgb(216, 67, 21))' }}>
                            <Grid item xs={3}>
                                <LaptopIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" sx={{ color: 'black' }}>
                                    50.2%
                                </Typography>{' '}
                            </Grid>
                            <Grid item xs={3}>
                                <ArrowUpwardIcon />
                            </Grid>
                            <Grid item xs={3}>
                                5%
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.chart}>
                            <Chart {...chartData} type="bar" height={175} />
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PageView;
