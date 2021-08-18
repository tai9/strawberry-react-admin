import React from 'react';

// third-party
import Chart from 'react-apexcharts';

//material ui
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '24px'
    },
    title: {
        fontSize: '1.125rem',
        fontWeight: '500',
        color: 'black',
        flex: '1 1 auto'
    },
    tagHr: {
        margin: '0px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)'
    },
    content: { padding: '20px' },
    name: { fontWeight: '500', color: 'rgb(33, 33, 33)', fontSize: '0.75rem', fontFamily: 'Roboto, sans-serif' },
    dataYt: { fontSize: '0.875rem', fontWeight: '500', color: 'rgb(244, 67, 54)' },
    dataFb: { fontSize: '0.875rem', fontWeight: '500', color: 'rgb(33, 150, 243)' },
    dataTw: { fontSize: '0.875rem', fontWeight: '500', color: 'rgb(103, 58, 183)' },

    chart: { margin: '5px 0' }
}));
const dataChart = {
    series: [1258, 975, 500],

    options: {
        chart: {
            type: 'donut'
        },
        labels: ['Youtube', 'Facebook', 'Twitter'],
        colors: ['rgb(244, 67, 54)', 'rgb(33, 150, 243)', 'rgb(103, 58, 183)'],
        plotOptions: {
            pie: {
                customScale: 0.8,
                donut: {
                    size: '65%'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
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

const Revenue = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Total Revenue</div>
            </div>
            <hr className={classes.tagHr} />
            <div id="chart" className={classes.chart}>
                <Chart options={dataChart.options} series={dataChart.series} height={250} type="donut" />
            </div>
            <div className={classes.content}>
                <Grid container>
                    <Grid item xs={4}>
                        <div className={classes.name}>Youtube</div>
                        <div className={classes.dataYt}>+ 16.85%</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.name}>Facebook</div>
                        <div className={classes.dataFb}>+45.36%</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.name}>Twitter</div>
                        <div className={classes.dataTw}>- 50.69%</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default Revenue;
