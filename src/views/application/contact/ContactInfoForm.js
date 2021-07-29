import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Avatar, Button, Chip, Divider, Grid, IconButton, Typography, Paper } from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { gridSpacing } from '../../../store/constant';

// assets
import {
    BlockTwoTone,
    BusinessTwoTone,
    CancelTwoTone,
    CakeTwoTone,
    EditTwoTone,
    EmailTwoTone,
    InfoTwoTone,
    PhoneTwoTone,
    PinDropTwoTone,
    WorkTwoTone
} from '@material-ui/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    chipPrimaryLight: {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        border: 'none',
        borderColor: theme.palette.primary.main
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    ScrollHeight: {
        height: 'calc(100vh - 88px)',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 56px)'
        }
    },
    info: {
        width: '100%',
        maxWidth: 342
    },
    avtLarge: {
        width: theme.spacing(8),
        height: theme.spacing(8)
    }
}));

//==============================|| CONTACT INFO FORM CARD ||==============================//

const ContactInfoForm = ({ onToggleForm }) => {
    const classes = useStyles();
    const theme = useTheme();

    const handleToggleForm = () => {
        onToggleForm();
    };

    return (
        <div className={classes.info} style={{ width: 318 }}>
            <Paper
                elevation={0}
                sx={{
                    border: '1px solid',
                    borderColor: theme.palette.primary.light,
                    ':hover': {
                        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    },
                    background: '#fafafa'
                }}
            >
                <PerfectScrollbar component="div" className={classes.ScrollHeight}>
                    <Grid
                        container
                        spacing={gridSpacing}
                        sx={{
                            padding: theme.spacing(3)
                        }}
                    >
                        <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Avatar className={classes.avtLarge} src="/broken-image.jpg" />
                                </Grid>
                                <Grid item xs>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4">Alene</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Chip color="primary" label="Work" className={classes.chipPrimaryLight} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <IconButton component="span" onClick={handleToggleForm}>
                                        <CancelTwoTone />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} container spacing={gridSpacing}>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="primary" fullWidth startIcon={<EditTwoTone />}>
                                        Edit
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="secondary" fullWidth startIcon={<BlockTwoTone />}>
                                        Block
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider className={classes.divider} />
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <BusinessTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">ABC Pvt Ltd</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <WorkTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">Specialist</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <EmailTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">
                                        agilulf_fuxg_work@gmil.com
                                        <Typography variant="body2" component="span" color="primary">
                                            {' '}
                                            work
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body2">
                                        agilulf_fuxg@gmil.com
                                        <Typography variant="body2" component="span" color="secondary">
                                            {' '}
                                            Personal
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <PhoneTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">
                                        253-418-5940
                                        <Typography variant="body2" component="span" color="primary">
                                            {' '}
                                            work
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body2">
                                        253-418-5940
                                        <Typography variant="body2" component="span" color="secondary">
                                            {' '}
                                            Personal
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <PinDropTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">Antigua and Barbuda</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <CakeTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">November 30, 1997</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <InfoTwoTone stroke={1.5} fontSize="small" />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">happy Birthday Agilulf</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Paper>
        </div>
    );
};

export default ContactInfoForm;
