import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Typography } from '@material-ui/core';

//import project
import LogoShare from '../../../assets/images/dashboard/logo-shares';
import LogoNetwork from '../../../assets/images/dashboard/logo-network';
import LogoReturn from '../../../assets/images/dashboard/logo-return';
import LogoOrder from '../../../assets/images/dashboard/logo-order';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2%'
    },
    LogoIcons: {
        padding: '12px',
        borderRadius: '30%',
        width: '50px',
        height: '50px',
        backgroundColor: 'rgb(227 242 253)',
        color: 'rgb(103, 58, 183)',
        marginRight: '20%'
    },
    GridItem: {
        backgroundColor: '#ffffff',
        borderRadius: '10px !important',
        border: '1px solid #eeeeee',
        width: '100%'
    },
    textSocial: {
        fontSize: '13px',
        textAlign: 'center'
    }
}));

//UI
const SocialNetwork = (theme) => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={6} className={classes.GridItem}>
                    <Box flexDirection="row" p={1} m={1}>
                        <Box display="flex" alignItems="center">
                            <div className={classes.LogoIcons}>
                                <LogoShare />
                            </div>
                            <Box>
                                <Typography variant="h4" align="center" color="inherit">
                                    1000
                                </Typography>
                                <span className={classes.textSocial}>SHARES</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.GridItem}>
                    <Box flexDirection="row" p={1} m={1}>
                        <Box display="flex" alignItems="center">
                            <div className={classes.LogoIcons}>
                                <LogoNetwork />
                            </div>
                            <Box>
                                <Typography variant="h4" align="center" color="inherit">
                                    600
                                </Typography>
                                <span className={classes.textSocial}>NETWORK</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.GridItem}>
                    <Box flexDirection="row" p={1} m={1}>
                        <Box display="flex" alignItems="center">
                            <div className={classes.LogoIcons}>
                                <LogoReturn />
                            </div>
                            <Box>
                                <Typography variant="h4" align="center" color="inherit">
                                    3560
                                </Typography>
                                <span className={classes.textSocial}>RETURN</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.GridItem}>
                    <Box flexDirection="row" p={1} m={1}>
                        <Box display="flex" alignItems="center">
                            <div className={classes.LogoIcons}>
                                <LogoOrder />
                            </div>
                            <Box>
                                <Typography variant="h4" align="center" color="inherit">
                                    100%
                                </Typography>
                                <span className={classes.textSocial}>ORDER</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SocialNetwork;
