import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Avatar, Button, Divider, FormControl, Grid, IconButton, InputAdornment, Typography, Paper, TextField } from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { gridSpacing } from './../../../store/constant';
import MultipleSelect from './MultipleSelect';

// assets
import {
    AddCircleOutline,
    BusinessTwoTone,
    CancelTwoTone,
    EmailTwoTone,
    TodayTwoTone,
    PhoneTwoTone,
    PublishTwoTone,
    WorkTwoTone
} from '@material-ui/icons';

// style constant
const useStyles = makeStyles((theme) => ({
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
    },
    startAdornment: {
        color: theme.palette.grey[500]
    }
}));

//==============================|| CONTACT FORM CARD ||==============================//

const ContactForm = ({ onToggleForm }) => {
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
                                            <Button variant="outlined" color="primary" size="small" startIcon={<PublishTwoTone />}>
                                                Upload
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="caption">Image size should be 125kb Max.</Typography>
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
                        <Divider className={classes.divider} />
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Name"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <BusinessTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Company"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <BusinessTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Job Title"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <WorkTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <MultipleSelect defaultValue={0} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Email"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <MultipleSelect defaultValue={1} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Email"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="primary" startIcon={<AddCircleOutline />}>
                                Add New Email
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <MultipleSelect defaultValue={0} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Phone Number"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <MultipleSelect defaultValue={1} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Phone Number"
                                    id="standard-start-adornment"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneTwoTone stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="primary" startIcon={<AddCircleOutline />}>
                                Add New Phone
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-birthday-input"
                                    label="Birthday"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <TodayTwoTone />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField id="outlined-bio-input" label="Bio" variant="outlined" fullWidth multiline minRows={3} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} container spacing={gridSpacing}>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Save
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="primary" fullWidth>
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Paper>
        </div>
    );
};

export default ContactForm;
