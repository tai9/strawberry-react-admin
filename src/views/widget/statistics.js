import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderStatistics from '../../ui-component/statistics/headerStatistics';
import {
    boxOne,
    boxThere,
    boxUpDown,
    dataRevenue,
    dataUser,
    dataImpressions,
    dataSocial,
    dataDaily
} from '../../ui-component/statistics/data';
import BoxOne from '../../ui-component/statistics/boxOne';
import BoxRevenue from '../../ui-component/statistics/boxRevenue';
import BoxThere from '../../ui-component/statistics/boxThere';
import BoxUpDown from '../../ui-component/statistics/boxUpDown';
import BoxSocialFb from '../../ui-component/statistics/boxSocialFb';
import ImpressionsCard from '../../ui-component/statistics/impressionsCard';
import DailyCard from '../../ui-component/statistics/dailyCard';
import BoxUser from '../../ui-component/statistics/boxUser';
import WeatherCard from '../../ui-component/statistics/weatherCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(3)
    }
}));

export default function Statistics() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <HeaderStatistics />
                    </Paper>
                </Grid>
                {boxOne.map((result) => (
                    <Grid item xs={12} lg={3} sm={6}>
                        <Paper className={classes.paper}>
                            <BoxOne key={result.id} res={result} />
                        </Paper>
                    </Grid>
                ))}

                {dataRevenue.map((item) => (
                    <Grid item xs={12} sm={12} lg={4} spacing={3}>
                        <BoxRevenue key={item.id} data={item} />
                    </Grid>
                ))}

                {boxThere.map((result) => (
                    <Grid item xs={12} lg={3} sm={6}>
                        <Paper className={classes.paper}>
                            <BoxThere key={result.id} res={result} />
                        </Paper>
                    </Grid>
                ))}

                {boxUpDown.map((result) => (
                    <Grid item xs={12} lg={3} sm={6}>
                        <Paper className={classes.paper}>
                            <BoxUpDown key={result.id} res={result} />
                        </Paper>
                    </Grid>
                ))}

                {dataSocial.map((item) => (
                    <Grid item xs={12} lg={3} sm={6}>
                        <BoxSocialFb key={item.id} data={item} />
                    </Grid>
                ))}

                {dataImpressions.map((item) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <Paper className={classes.paper}>
                            <ImpressionsCard key={item.id} data={item} />
                        </Paper>
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item xs={12} lg={3} sm={6}>
                                1234
                            </Grid>
                            <Grid item xs={12} lg={3} sm={6}>
                                1234
                            </Grid>
                            <Grid item xs={12} lg={3} sm={6}>
                                1234
                            </Grid>
                            <Grid item xs={12} lg={3} sm={6}>
                                1234
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {dataDaily.map((item) => (
                    <Grid item xs={12} sm={12} lg={4}>
                        <DailyCard key={item.id} data={item} />
                    </Grid>
                ))}

                {dataUser.map((item) => (
                    <Grid item xs={12} sm={6} lg={3}>
                        <BoxUser key={item.id} data={item} />
                    </Grid>
                ))}
                <Grid item xs={12} sm={12} lg={4}>
                    <WeatherCard />
                </Grid>
            </Grid>
        </div>
    );
}
