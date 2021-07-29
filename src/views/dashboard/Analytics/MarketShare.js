import PropTypes from 'prop-types';
import React from 'react';

// material-ui- icons
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Box} from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonEarningCard from '../../../ui-component/cards/Skeleton/EarningCard';
import LogoTwitter from '../../../assets/images/dashboard/logo-twitter';
import LogoFaceBook from '../../../assets/images/dashboard/logo-facebook';
import LogoYouTube from '../../../assets/images/dashboard/logo-youtube';


// assets

//charts
import Chart from 'react-apexcharts';
import MarketShareChart from './chart-data/MarketShareChart'

// style constant
import { gridSpacing } from './../../../store/constant';


const useStyles = makeStyles((theme) => ({
    logoFacebook: {
        padding : "8px",
        borderRadius : "30%",
        width: "40px",
        height: "40px",
        marginRight: "3px",
        backgroundColor : "rgb(237 231 246)",
        color: "rgb(103, 58, 183)",
    },
    logoTwitter: {
        padding : "8px",
        borderRadius : "30%",
        width: "40px",
        height: "40px",
        marginRight: "3px",
        backgroundColor : "rgb(227 242 253)",
        color: "rgb(33, 150, 243)",
    },
    logoYouTube: {
        padding : "8px",
        borderRadius : "30%",
        width: "40px",
        height: "40px",
        marginRight: "3px",
        backgroundColor : "rgb(251 232 233)",
        color: "rgb(244, 67, 54)",
    },
}));

//===========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//

const MarketShare = ({ isLoading }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="h3">Market Share</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5">Department wise monthly sales report</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">
                                        <span style={{verticalAlign : "middle"}}><TrendingDownIcon style={{color : "#EE0000", fontSize : 35}} /></span>
                                        <span> 99,368.23</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <br/>
                            <Grid container direction="row" spacing={1}>
                                <Box flexDirection="row" p={1} m={1}>
                                    <Box display="flex" alignItems="center">
                                        <div className = {classes.logoFacebook}><LogoFaceBook /></div>
                                        <h3>+54.69%</h3>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" p={1} m={1}>
                                    <Box display="flex" alignItems="center">
                                        <div className = {classes.logoTwitter}><LogoTwitter /></div>
                                        <h3>-50.69%</h3>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" p={1} m={1}>
                                    <Box display="flex" alignItems="center">
                                        <div className = {classes.logoYouTube}><LogoYouTube /></div>
                                        <h3>-50.69%</h3>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Chart {...MarketShareChart} />
                    </Grid>
                </MainCard>
            )}
        </React.Fragment>
    );
};

MarketShare.propTypes = {
    isLoading: PropTypes.bool
};

export default MarketShare;
