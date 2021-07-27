import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

//import project
import LogoShare from '../../../assets/images/dashboard/logo-shares';
import LogoNetwork from '../../../assets/images/dashboard/logo-network';
import LogoReturn from '../../../assets/images/dashboard/logo-return';
import LogoOrder from '../../../assets/images/dashboard/logo-order';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        borderLeft: '1px solid',
        borderBottom: '1px solid',
        borderLeftColor: '#eeeeee',
        borderBottomColor: '#eeeeee',
        padding: 20
    },
    gridText: {
        paddingTop: 8
    },
    gridIcons: {
        padding: 10,
        borderRadius: '14px',
        width: '50px',
        height: '50px',
        backgroundColor: '#e3f2fd',
        color: '#673ab7'
    },
    textNumber: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.334',
        color: 'rgb(33, 33, 33)',
        textAlign: 'center'
    },
    textSocial: {
        fontSize: '13px',
        textAlign: 'center',
        color: '#9e9e9e'
    },
    cardContent: {
        padding: '0px !important'
    }
}));

//UI
const SocialNetwork = (theme) => {
    const classes = useStyles();
    return (
        <Paper>
            <CardContent className={classes.cardContent}>
                <Grid container>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Grid container>
                            <Grid item className={classes.gridIcons}>
                                <LogoShare />
                            </Grid>
                            <Grid item xs={9} className={classes.gridText}>
                                <Typography variant="h5" className={classes.textNumber}>
                                    1000
                                </Typography>
                                <Typography variant="h6" className={classes.textSocial}>
                                    SHARES
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Grid container>
                            <Grid item className={classes.gridIcons}>
                                <LogoNetwork />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h5" className={classes.textNumber}>
                                    600
                                </Typography>
                                <Typography variant="h6" className={classes.textSocial}>
                                    NETWORK
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Grid container>
                            <Grid item className={classes.gridIcons}>
                                <LogoReturn />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h5" className={classes.textNumber}>
                                    3550
                                </Typography>
                                <Typography variant="h6" className={classes.textSocial}>
                                    RETURNS
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Grid container>
                            <Grid item className={classes.gridIcons}>
                                <LogoOrder />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h5" className={classes.textNumber}>
                                    100%
                                </Typography>
                                <Typography variant="h6" className={classes.textSocial}>
                                    ORDER
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper>
    );
};

export default SocialNetwork;
