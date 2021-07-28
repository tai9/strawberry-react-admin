import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Avatar, Button, Divider, FormControl, Grid, IconButton, InputAdornment, Typography, Paper, TextField } from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { gridSpacing } from './../../../store/constant';

// assets
import { BusinessTwoTone, CancelTwoTone, PublishTwoTone } from '@material-ui/icons';

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
    },
    margin: {
        margin: theme.spacing(1)
    }
}));

//==============================|| CONTACT FORM CARD ||==============================//

const ContactForm = () => {
    const classes = useStyles();
    const theme = useTheme();
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
                                    <IconButton component="span">
                                        <CancelTwoTone />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider className={classes.divider} />
                        <Grid item xs={12}>
                            <FormControl fullWidth className={classes.margin}>
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
                        <Grid item>
                            <Typography variant="h3" gutterBottom>
                                h3. Heading
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                h4. Heading
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" gutterBottom>
                                h5. Heading
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" gutterBottom>
                                h6. Heading
                            </Typography>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Paper>
        </div>
    );
};

export default ContactForm;
