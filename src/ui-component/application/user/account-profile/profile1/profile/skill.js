import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: ' Roboto, sans-serif',
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
    processItem: { padding: '15px 0' },
    process: { padding: '15px 20px' }
}));

export default function Skill() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Skill</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.process}>
                <Grid container>
                    <Grid xs={12} md={6} className={classes.processItem}>
                        Junior
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="determinate" value={70} color="primary" />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">
                                    70%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} className={classes.processItem}>
                        UX Researcher
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="determinate" value={80} color="primary" />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">
                                    80%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} className={classes.processItem}>
                        Wordpress
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="determinate" value={25} color="secondary" />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">
                                    25%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} className={classes.processItem}>
                        Graphic Designer
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="determinate" value={80} color="primary" />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">
                                    80%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} className={classes.processItem}>
                        HTML
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="determinate" value={45} color="secondary" />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">
                                    45%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} className={classes.processItem}>
                        PHP
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="determinate" value={65} color="primary" />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">
                                    65%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
